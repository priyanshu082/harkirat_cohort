//just synstatical sugar
//just a more readable way of writting async functions

//what is syntactical sugar mean?
// Arrow functions: Instead of writing function(x) { return x * x; }, you can write (x) => x * x. This syntax is more concise and easier to read.

// const myOwnSetTimeOut=(fn,duration)=>{
//     console.log("own waala call hua")
//   setTimeout(fn, duration);
// }

// myOwnSetTimeOut(()=>{console.log("function jo arguemnt se bhja vo call hua call")},2000)
 
//promisified and non promisified functions
function promisifiedMyOwnSetTimeOut(duration){
  const p = new Promise(function(resolve){
    setTimeout(resolve,duration)
  }) //initialization of promise
  return p
}
const ans= promisifiedMyOwnSetTimeOut(1000)
console.log(ans.then())
 
// non promsified function
const myOwnSetTimeOut=(fn,duration)=>{
  console.log("own waala call hua")
setTimeout(fn, duration);
}


//we will do synchronous function untill we have to do below three things
//1. we have to do some IO operation
//2. we have to do some network operation
//3. we have to do some asynchronous operation


//how to call a promisified question ?