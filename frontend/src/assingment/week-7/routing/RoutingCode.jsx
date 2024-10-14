//just cut and paste it to app.jsx to run the code import React, { lazy, Suspense } from 'react'
import {BrowserRouter,Route,Routes,useNavigate} from "react-router-dom"
import axios from "axios"
// import Memo1 from "../src/assingment/week-6/use-memo/Memo1";
// import Memo2 from '../src/assingment/week-6/use-memo/Memo2';
import Callback1 from '../src/assingment/week-6/use-callback/Callback1';
import Useref1 from '../src/assingment/week-6/useref/Useref1';
import Useref2 from '../src/assingment/week-6/useref/Useref2';

//there is a concept of lazy loading in this we only load the data of page on which  the user is 
//if user is on page1 he will only get the bundle of page1 and page2 data will not come
//SYNTAX
const Memo2 = lazy(()=>import("../src/assingment/week-6/use-memo/Memo2"))
const Memo1 = lazy(()=>import("../src/assingment/week-6/use-memo/Memo1"))



function App() {

//  const navigate=useNavigate(); 
// it will not work as we can only access it inside browserrouter

  return (
    <div>
   <BrowserRouter>
     <AppBar/>
        <Routes>
           <Route path='/week6/memo1' element={<Suspense fallback={"loading.."}><Memo1/></Suspense>}/>
           <Route path='/week6/memo2' element={<Suspense fallback={"loading.."}><Memo2/></Suspense>}/>
        </Routes>
   </BrowserRouter>
    </div>
  )
}

function AppBar(){

  // now this solve the issue of re fetching of whole js and html bundle 
  // it will only do client side rendering that is data is once fetched now it will not change again and again 
  const navigate=useNavigate();

return  <div >
{/* we can also cahnge the routing by doing this onClick={()=>{window.location.href="/"}} */}
{/* but we can do this here beacuse it is requesting wholejs and html bundle again and aagain on changing the route */}
{/* its just similar to just opening  the  another route on new tab */}
{/* but in react we do client side routing not doing hard reloading  */}
{/* so we use useNavigate */}
<button onClick={()=>{navigate("/")}}>home</button>
<button onClick={()=>{navigate("/week6/memo1")}}>memo</button>
</div>
}

export default App