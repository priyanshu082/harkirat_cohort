//async function alaways return a promise
// async function getPosts() {
//     //what ever you return from this will get wrap inside a promise
//     return "Namaste"
// }
// const data=getPosts()
// console.log(data)



// async function getData() {
//     //what ever you return from this will get wrap inside a promise
//     return p
// }

// const data2=getData()
// data2.then((res)=>{
//     console.log(res)
// })



//using async and await
//they are use to handle promises



// // handling promise before async await 
// function getData(){
//     //javascript will not wait for the promise to resolve and move to next line
//     p.then((res)=> console.log(res))
//     console.log("namaste")
// }

// getData()


// //handling with async and await
// async function getPosts() {
//     //here javascript will wait for the promise to resolve
//     const val = await p; //await can only be used inside an async function
//     console.log(val)
//     console.log("namaste")
//     return val
// }

// const data = getPosts()
// // console.log(data)  

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Promise resolved")
    },10000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Promise resolved")
    },5000)
})


async function handlePromise (){
    const val1=await p1
    console.log("p1 done : " ,val1)
    const val2=await p2
    console.log("p2 done : " ,val2)
}

handlePromise()
//as soon as we call handlepromise function it is pushed inside the callstack and will start executing code line by line
//when it encounters await keyword it will pause the execution of the function , it will pop the handlepromise function from the callstack and push it inside the task queue
//it will not block the main thread so that any other function can implements
//when p1 is resolved it will push the handlepromise function back into the callstack and will start executing the code line by line 
//it will pause again when it encounters await keyword and will push it inside the task queue
//this process will continue until p2 is resolved
//when p2 is resolved it will push the handlepromise function back into the callstack and will start executing the code line by line

//p1 p2 will start executing in start of the code when we run and will be resolved in the background
//so we can say that p1 and p2 are running in parallel
//but in case of synchronous code it will run one by one but since js is a synchronous it will wait for p1 to complete first then after that it will go to the p2 and return it immediately without any delay of 5 sec 
