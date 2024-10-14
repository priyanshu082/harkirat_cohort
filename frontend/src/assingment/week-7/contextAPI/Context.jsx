import React from 'react'
import { createContext } from 'react'

const CountContext=createContext(0); 

function Context() {

const [count , setCount]=useState(0);

  return (
    <div>
  <CountContext.Provider value={count}>
    <Count setCount={setCount}/>
  </CountContext.Provider>
    </div>
  )
}

const Count=({setCount})=>{
  
  return <div>
     <CountReRender/>
     <Buttons setCount={setCount}/>
  </div>
}

const CountReRender=()=>{
  const count =useContext(CountContext)
  return <>
  {count}
  </>
}

const Buttons =({setCount})=>{
  const count =useContext(CountContext)
  return <>
  <button onClick={()=>{setCount(prev=>prev+1)}}>
    Increase
  </button>
  <button onClick={()=>{setCount(prev=>prev-1)}}>
    Decrease 
  </button>
  </>
}



export default Context
