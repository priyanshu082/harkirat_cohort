import React, { memo, useEffect, useState, useCallback, useMemo } from 'react'
import axios from "axios"

function Example() {
  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setTodos(response.data)
        console.log(response.data)
      })
  }, [])

  const getTodo = useCallback((id) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response.data)
        setSelectedTodo(response.data)
      })
  }, [])

  // const getTodo = (id) => {
  //   axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then((response) => {
  //       console.log(response.data)
  //       setSelectedTodo(response.data)
  //     })
  // }

  const memoizedTodos = useMemo(() => todos.map(todo => (
    <Todo key={todo.id} todo={todo} getTodo={getTodo} />
  )), [todos, getTodo])

  const button= useMemo(()=> todos.map(todo =>(
    <button onClick={()=>getTodo(todo.id)}>{todo.id}</button>
  )),[todos,getTodo])

  return (
    <>
      <SelectedTodo todo={selectedTodo} />
      <div>--------------------------------------------------------------</div>
      {memoizedTodos}
      {button}
    </>
  )
}

const SelectedTodo = memo(function SelectedTodo({ todo }) {
  console.log("SelectedTodo rendered")
  return (
    <div>
      button : {todo.id} <br/>
      {todo?.id} : {todo?.name} 
    </div>
  )
})

const Todo = memo(function Todo({ todo, getTodo }) {
  console.log(`Todo ${todo.id} rendered`)
  return (
    <div onClick={() => getTodo(todo.id)}>
      {todo.id} : {todo.name}
    </div>
  )
})

export default Example