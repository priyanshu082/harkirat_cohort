import React, { ReactNode } from 'react'

interface HelloInterface{
    children :ReactNode,
    text : string
}

const Hello = ({children,text}:HelloInterface) => {
  return (
    <div>
        {children} <br/>
        {text}
    </div>
  )
}

export default Hello