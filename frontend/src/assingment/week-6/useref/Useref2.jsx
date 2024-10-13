import React, { useRef, useState ,useEffect} from 'react'

//create a component that tracks and displays the number of times it has been rendered .Use useRef to create a variable that persists across renders without causing  additional renders when it changes

//since using global variable is not good
// let reRender=0;
const Useref2 = () => {
    const [count, setCount]=useState(0);
    //cant do the track of re render using usestate
    // const [reRender,setReRender]=useState(0);

    //we can use use ref to store numbers also and we provide reference to 0 which will not change on renrender of parent component
    //now re render will not initailze to 0 again on re render
    const reRender=useRef(0);

    const handler=()=>{
        setCount(4)
      
    }

    useEffect(()=>{ reRender.current= reRender.current+1;},[count])
   

  return (
    <div>
        <p >the component has re render {reRender.current} times</p>
        <button  onClick={handler}>render me</button>
    </div>
  )
}

export default Useref2