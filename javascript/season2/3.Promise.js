//promise.all
//promise.all([p1,p2,p2]) 
//let suppose p1=3s,p2=2s ,p3=1s
//then p1 will be resolved first then p2 then p3
//then the result will be [3,2,1]
//so it will return all the values of the promises after 3s
//promise.all make all the promises in parallel 
//if any of the promise is rejected than it will throw error and wont wait for the rest of the promises to get resolved
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P1 rejected")
    },3000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P2 rejected") //will throw error 
    },2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("P3 rejected") 
    },1000)
})


Promise.all([p1,p2,p3]).then((res)=>[
    console.log(res),
]).catch((error)=>{
    console.log("Error in promise.all",error)
})




//now there is another method called promise.allSettled
//if one of the promises get rejected
//it will still wait for all the promises to get settled than it will return the array of objects
//[val1,error,val3] after 3 sec when all the promises are settled
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log("Error in promise.allSettled",err)
})
// output
// [
//     { status: 'fulfilled', value: 'P1 resolved' },
//     { status: 'rejected', reason: 'P2 rejected' },
//     { status: 'fulfilled', value: 'P3 rejected' }
// ]



//Promise.race 
//it will return the first promise that gets resolved or rejected
//it will not wait for the rest of the promises to get resolved or rejected
Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log("Error in promise.race",err)
})
// output
// P3 resolved



//promise.any([p1,p2,p3])
//when ever the first promise get resolve it will return the value of that promise
//if all the promises get rejected then it will return undefined (aggregate error)
//will only wait for frist success but if any rejected it will still wait for the success of any one
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    //will return array of errors aggregating all the errors if any will pass it will not throw any error
    console.log("Error in promise.any",err.errors)
})
// output
// P3 resolved


