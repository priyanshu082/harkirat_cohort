// for(var i=0;i<4;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

// //



// for(let i=0;i<4;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// //


// function myFunction() {
//     let counter=0;
//     return function(){
//         counter++;
//         return counter
//     }
// }

// let f1=myFunction();
// let f2=myFunction()
// console.log(f1()) //1
// console.log(f2()) //1
// console.log(f1()) //2



// function once(fn) {
//     let called = false
//     let result;
//     return function (...args) {
//       if (called) return result;
//       try {
//         result = fn.apply(this, args)
//         called = true;
//         return result;
//       }catch (error) {
//         throw error;
//       }
//     } 
//   }
//  let count=0;
//  function someTimesThrowError(){
//     if(count===0) {
//         count++;
//         throw new Error('Error')
//     }
//     return "ok"
//  }

//  const onceSomeTimesThrowError = once(someTimesThrowError)
 
//  try {
//     console.log(onceSomeTimesThrowError())
//  } catch (error) {
//     console.log(error)
//  }
//  try {
//     console.log(onceSomeTimesThrowError())
//  } catch (error) {
//     console.log(error)
//  }
//  try {
//     console.log(onceSomeTimesThrowError())
//  } catch (error) {
//     console.log(error)
//  }



const obj={
   items:[
      {id:1, name:'item1'},
      {id:2, name:'item2'},
   ]
}

console.log(obj["items"]["0"])

const val="items[0]";
console.log(val.split("["))