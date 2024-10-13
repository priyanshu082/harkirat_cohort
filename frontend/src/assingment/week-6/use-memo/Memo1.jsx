import React, { useMemo, useState } from 'react'

const Memo1 = () => {
  const [input,setInput]=useState(0)

  const handleInput=(e)=>{
    setInput(Number(e.target.value))
  }

  const factorialCalculator = useMemo(function(){
    let ans=1;
    for(let i=1;i<=input;i++){
      ans*=i;
    }
return ans;
  },[input])


  return (
    <div>
        <input type='number' onChange={handleInput}/>
        <br/>
        <div>
          Factorial of {input} : {factorialCalculator}
        </div>
    </div>
  )
}

export default Memo1