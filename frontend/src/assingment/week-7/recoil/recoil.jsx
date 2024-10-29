import React, { lazy, Suspense, useContext, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import  {countAtom, evenSelector}  from './assingment/week-7/recoil/store/atoms/count.jsx'
// import { CountContext } from './assingment/week-7/contextAPI/Context';


function App() {

  return (

<RecoilRoot>
<Count />
</RecoilRoot>
  


  )
}

const Count=()=>{
console.log("re render count")
  return <div>

    <div><CountReRender/></div> 
     <Buttons />
     <div><EventCountReRender/></div>
  </div>
}

const CountReRender=()=>{
const count=useRecoilValue(countAtom)

console.log("re render countrerender")
  return <>
  {count}
  </>
}

const EventCountReRender=()=>{
  const isEven =useRecoilValue(evenSelector)
  console.log("re render odd even")
  return <div>
    {(isEven%2===0) ?"Even" : "Odd"}
  </div>
}

const Buttons =({})=>{
// const [count,setCount]=useRecoilState(countAtom)
const setCount=useSetRecoilState(countAtom)
console.log("re render buttons")
  return <>
  <button onClick={()=>setCount(prev=>prev+1)}>
    Increase
  </button>
  <button onClick={()=>setCount(prev=>prev-1)}>
    Decrease 
  </button>
  </>
}



export default App