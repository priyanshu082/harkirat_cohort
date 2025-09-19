//this is called callback function
setTimeout(()=>{
    console.log("time complete")
},1000)


function x(y){
    console.log("x");
    y();
}

x(function (){
    console.log("y")
})


//javascript is synchronous single threaded language 
//and when setimeout is used it doesnt block the execution of code
//it just adds the function to the end of the call stack and continues with the rest of the code
//and then after the time is up it adds the function to the call stack and executes it
