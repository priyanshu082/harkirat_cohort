import React, { useMemo, useState } from 'react'

const word=['hi', "random", "my","name","word","is","for","to"]
const lines=1000;
const ALL_WORD=[]
for(let i=0;i<lines;i++){
    let sentence=""
    for(let j=0;j<word.length;j++){
        console.log("rendering")
        sentence+=(word[Math.floor(word.length* Math.random())])
        sentence+=" ";
    }
    ALL_WORD.push(sentence)
}

const Memo2 = () => {
     
    const [sentence,setSentence]=useState(ALL_WORD)
    const [filter,setFilter]=useState()

    const filterSentence=useMemo(()=>{
       return sentence.filter(sentence=>sentence.includes(filter))
    },[sentence,filter])
   
  return (
    <div>
         {filterSentence?.length}
        <input type='string' onChange={(e)=>setFilter(e.target.value)}/>
        {filterSentence.map((sentence)=>{
            return <p key={Math.random()}>{sentence}</p>
        })}
       
    </div>
  )
}

export default Memo2