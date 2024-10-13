import React, { memo, useEffect, useState, useCallback, useMemo } from 'react'
import axios from "axios"

function App() {
 const [num , setNum]=useState(0);
 const [sum,setSum]=useState(0);
 const [counter,setCounter]=useState(0);

 useEffect(()=>{
  let ans=num/2;
  ans=(num+1)*ans
  console.log(ans)
  setSum(ans)
 },[num])

//  let sum=useMemo(()=>{
//   let ans=num/2;
//   ans=(num+1)*ans
//   console.log(ans)
//   return ans
//  },[num])
  
  return (
    <>
      
    <input
    type='number'
    value={num}
    onChange={(e)=>{
      console.log("called")
      const value = Number(e.target.value);
      setNum(isNaN(value) ? 0 : value);
    }}/><br/>
    Sum from 1 to {num} : {sum}
    <br/>
    <button onClick={()=>setCounter(prev=> prev+1)}>
    Counter ({counter})
    </button>
    </>
  )
}



export default App