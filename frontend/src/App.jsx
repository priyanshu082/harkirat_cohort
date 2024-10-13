import React, { memo, useEffect, useState, useCallback, useMemo } from 'react'
import axios from "axios"
import Memo1 from "../src/assingment/week-6/use-memo/Memo1";

function App() {
 const [count , setCount]=useState(0);


  return (
    <>
   <Memo1/>
    </>
  )
}

export default App