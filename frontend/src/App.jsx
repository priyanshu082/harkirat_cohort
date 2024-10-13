import React, { memo, useEffect, useState, useCallback, useMemo } from 'react'
import axios from "axios"
import Memo1 from "../src/assingment/week-6/use-memo/Memo1";
import Memo2 from '../src/assingment/week-6/use-memo/Memo2';
import Callback1 from '../src/assingment/week-6/use-callback/Callback1';


function App() {
 const [count , setCount]=useState(0);
 

  return (
    <>
   <Callback1/>
    </>
  )
}

export default App