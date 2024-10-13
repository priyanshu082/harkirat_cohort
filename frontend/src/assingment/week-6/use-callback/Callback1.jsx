import React, { useCallback, useState ,memo} from 'react'

const Callback1 = () => {
    const [num,setNum]=useState(0)
    const [input ,setInput]=useState("")
    const [timer ,setTimer]=useState(null)

    const increment=useCallback(()=>{
        console.log('increment is called')
        setNum(prev=>prev+1)
    },[num])
     
    const decrement = useCallback(() => {
        console.log('decrement is called')
        setNum(prev=>prev-1)      
    },[num])
    


  return (
    <div>
        <input type='string' onChange={(e)=>{
            if(timer){
                clearTimeout(timer)
            }
            const newTimer=setTimeout(() => {
                setInput(e.target.value)
            },2000);
            setTimer(newTimer)
            }}/>
        <br/>
        {input}<br/>
        <div>Count: {num}</div>
        <Buttons increment={increment} decrement={decrement}/>
    </div>
  )
}

const Buttons=memo(({increment,decrement})=>{
    // console.log("CHild is render")
return <>

<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</>
})


export default Callback1

//write the coment for the code above 