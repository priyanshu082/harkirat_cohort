//promise.all
//promise.all([p1,p2,p2]) 
//let suppose p1=3s,p2=2s ,p3=1s
//then p1 will be resolved first then p2 then p3
//then the result will be [3,2,1]
//so it will return all the values of the promises after 3s
//promise.all make all the promises in parallel 
//if any of the promise is rejected than it will throw error and wont wait for the rest of the promises to get resolved
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1 rejected")
    },3000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P2 rejected") //will throw error 
    },2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P3 rejected") 
    },1000)
})


// Promise.all: Runs all promises in parallel and waits for all to resolve. 
// If any promise rejects, Promise.all immediately rejects with that error and does not wait for the rest.
Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log("Error in promise.all", error);
    });

// Output:
// Error in promise.all P3 rejected




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
//will only wait for first success but if any rejected it will still wait for the success of any one
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    //will return array of errors aggregating all the errors if any will pass it will not throw any error
    console.log("Error in promise.any",err.errors)
})
// output
// P3 resolved


// Polyfill for Promise.all
// This function works just like Promise.all. It takes an array (or iterable) of promises (or values).
// It returns a new promise that:
//   - resolves with an array of all resolved values (in the same order as input)
//   - rejects as soon as any one promise rejects (with that error)
// If the input array is empty, it resolves immediately with an empty array.
Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let results = []; // This will store the resolved values in the correct order
        let completed = 0; // This counts how many promises have finished (resolved)
        promises = Array.from(promises); // Make sure we have an array (in case it's not)
        if (promises.length === 0) return resolve([]); // If nothing to wait for, resolve right away

        // Go through each promise/value in the input
        promises.forEach((p, i) => {
            // Make sure p is a promise (if it's a value, Promise.resolve will wrap it)
            Promise.resolve(p).then(
                val => {
                    // When this promise resolves, save its value at the correct index
                    results[i] = val;
                    completed++; // One more promise finished
                    // If all promises have finished, resolve the main promise with all results
                    if (completed === promises.length) {
                        resolve(results);
                    }
                },
                err => {
                    // If any promise rejects, reject the main promise immediately with that error
                    reject(err);
                }
            );
        });
    });
};

// Polyfill for Promise.allSettled
// This function works like Promise.allSettled. It takes an array (or iterable) of promises (or values).
// It returns a new promise that resolves after all input promises have finished (either resolved or rejected).
// The result is an array of objects, each describing the outcome for each input:
//   - { status: "fulfilled", value: ... } if resolved
//   - { status: "rejected", reason: ... } if rejected
// If the input is empty, resolves immediately with an empty array.
Promise.myAllSettled = function(promises) {
    return new Promise((resolve) => {
        let results = []; // This will store the result objects for each promise
        let completed = 0; // Counts how many promises have finished (either way)
        promises = Array.from(promises); // Make sure we have an array
        if (promises.length === 0) return resolve([]); // If nothing to wait for, resolve right away

        // Go through each promise/value in the input
        promises.forEach((p, i) => {
            Promise.resolve(p).then(
                val => {
                    // If promise resolved, store fulfilled status and value
                    results[i] = { status: "fulfilled", value: val };
                    completed++;
                    // If all promises have finished, resolve with the results array
                    if (completed === promises.length) resolve(results);
                },
                err => {
                    // If promise rejected, store rejected status and reason
                    results[i] = { status: "rejected", reason: err };
                    completed++;
                    // If all promises have finished, resolve with the results array
                    if (completed === promises.length) resolve(results);
                }
            );
        });
    });
};

// Polyfill for Promise.race
// This function works like Promise.race. It takes an array (or iterable) of promises (or values).
// It returns a new promise that settles (resolves or rejects) as soon as any input promise settles.
// The value or error is the same as the first settled promise.
Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        // Go through each promise/value in the input
        for (let p of promises) {
            // As soon as any promise resolves or rejects, settle the main promise the same way
            Promise.resolve(p).then(resolve, reject);
        }
    });
};

// Polyfill for Promise.any
// This function works like Promise.any. It takes an array (or iterable) of promises (or values).
// It returns a new promise that:
//   - resolves as soon as any input promise resolves (with that value)
//   - if all promises reject, it rejects with an AggregateError (or Error) containing all errors
// If the input is empty, it rejects immediately.
Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        let errors = []; // This will store the errors from rejected promises
        let rejectedCount = 0; // Counts how many promises have rejected
        promises = Array.from(promises); // Make sure we have an array
        if (promises.length === 0) {
            // If input is empty, reject right away with an AggregateError or Error
            return reject(new (typeof AggregateError !== "undefined" ? AggregateError : Error)([], "All promises were rejected"));
        }
        // Go through each promise/value in the input
        promises.forEach((p, i) => {
            Promise.resolve(p).then(
                val => {
                    // As soon as any promise resolves, resolve the main promise with that value
                    resolve(val);
                },
                err => {
                    // If promise rejects, store the error at the correct index
                    errors[i] = err;
                    rejectedCount++;
                    // If all promises have rejected, reject with all errors
                    if (rejectedCount === promises.length) {
                        if (typeof AggregateError !== "undefined") {
                            // If AggregateError is supported (modern JS), use it
                            reject(new AggregateError(errors, "All promises were rejected"));
                        } else {
                            // Fallback for older JS: use Error and attach errors array
                            let error = new Error("All promises were rejected");
                            error.errors = errors;
                            reject(error);
                        }
                    }
                }
            );
        });
    });
};
