import React, { lazy, Suspense, useContext, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { item, items,ItemSelector,searchQuery } from './assingment/week-7/recoil/assingment/store/atoms/todo'


function App() {
  return (
<RecoilRoot>
<InputField/>
<TodosList/>
<SearchBar/>
<SearchedItems/>
</RecoilRoot>
)}


const InputField=()=>{
  const [todo, setTodo] = useRecoilState(item)
  const setTodos=useSetRecoilState(items)

  const handleChange=(e)=>{
    const {name,value}=e.target
    setTodo((prev)=>{
      return {...prev,[name]:value}
    })
  }

  const handleAdd=()=>{
    if(!todo.name || !todo.description){
      alert('Please fill all the fields')
    }else{
      setTodos((prev)=>[...prev,{...todo}])
      setTodo({name:"",description:""})
    }
    
  }

  return <>
  <div>Enter the name</div>
  <input  
  type='string'
  name='name'
  value={todo.name}
  onChange={handleChange}
  />
  <div>Enter the description</div>
  <input  
  type='string'
  name='description'
  value={todo.description}
  onChange={handleChange}
  />

  <button onClick={handleAdd}>Done</button>

  </>
}

const TodosList=()=>{
  const todos=useRecoilValue(items)
  return <>
  <h3>Item List</h3>
      <ul>
        {todos.map((itm, index) => (
          <li key={index}>
            {itm.name}: {itm.description}
          </li>
        ))}
      </ul>
  </>
}

const SearchBar=()=>{
  const [search_Query,setSearch_Query] = useRecoilState(searchQuery)

  const handleSearch=(e)=>{
    setSearch_Query(e.target.value)
  }

  return <>
  <div>Search</div>
  <input type='string'  onChange={handleSearch}/>
  
  </>
}

const SearchedItems=()=>{
  const todos= useRecoilValue(ItemSelector)
  return <>
  <h3>Item List</h3>
      <ul>
        {todos.map((itm, index) => (
          <li key={index}>
            {itm.name}: {itm.description}
          </li>
        ))}
      </ul>
  </>
}

export default App