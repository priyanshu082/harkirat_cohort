import React, { memo, useEffect, useState, useCallback, useMemo } from 'react'
import axios from "axios"
import Memo1 from "../src/assingment/week-6/use-memo/Memo1";
import Memo2 from '../src/assingment/week-6/use-memo/Memo2';

function App() {
 const [count , setCount]=useState(0);


  return (
    <>
   {/* <Memo1/> */}
   <Memo2/>
    </>
  )
}

export default App