// A Promise is an object which represents eventual completion or failure of an asynchronous operation. Promises are immutable once resolved and they give us a lot of control over our code. They have three state pending, fulfilled or rejected. The promise object contains two parts 1) PromiseState(stores the state of the promise) and 2)PromiseResult(stores data)



//lets take an example of creating and order 
//first we will select items from cart and after that we will proceed to checkout ,we will do payemnt and suppose after payement we need to show the ordersummary page 

// so basically what we need is we need to first call the cart page and then call the checkout page and then call the order summary page

//so we need to create a flow of pages

// const cart=["itme1","item1","item3"];

// api.createOrder(cart, function(){

//     api.checkout(function(){

//         api.orderSummary(function(){

//             api.updateWallet();

//         });

//     });

// })

//this way we are seeing that it is getting complicated
//when we have more pages we need to call we will have more nested functions
// this is called callback hell

//another problem existed is INVERSION OF CONTROL 
//we have given control of our function to another funnction 
//what if outer function never execute there may be bugs and issues happens 

//-------------------------------------------------------------------
//-------------------------------------------------------------------

//so because of these issue we use promise
//promise is a object that has two methods
//1) resolve
//2) reject
//then we can use .then() method to call the next function
//so basically we are giving control of our function to promise
//promise will call the next function when it is resolved


// const promise=api.createOrder(cart)

// promise.then(function(orderId){
//      return api.checkout();
// })


const GITHUB_API="https://api.github.com/users/priyanshu082"

const user =fetch(GITHUB_API)

user.then((data)=>{
    console.log(data)
})


//we can define promises as "container for future value"

//.then() method is used to call the next function

// This is a Promise chain that demonstrates how to handle a sequence of asynchronous operations in a clean, readable way (avoiding callback hell).
// Here's how the flow works:
//
// 1. `api.createOrder(cart)` is called. This returns a Promise that resolves with an `orderId` when the order is created.
// 2. `.then((orderId) => api.checkOut(orderId))`:
//      - When the order is created, the `orderId` is passed to `api.checkOut(orderId)`.
//      - This function returns a Promise that resolves with `paymentInfo` after checkout is complete.
// 3. `.then((paymentInfo) => api.showOrderSummary(paymentInfo))`:
//      - Once checkout is done, `paymentInfo` is passed to `api.showOrderSummary(paymentInfo)`.
//      - This function returns a Promise (or value) after showing the order summary.
// 4. `.then((paymentInfo) => api.updateWallet(paymentInfo))`:
//      - Finally, `paymentInfo` is passed to `api.updateWallet(paymentInfo)` to update the user's wallet.
//
// Each `.then()` waits for the previous Promise to resolve before running its function, ensuring the steps happen in order.

api.createOrder(cart)
    .then((orderId) => api.checkOut(orderId))                 // Step 1: Create order, then checkout with orderId
    .then((paymentInfo) => api.showOrderSummary(paymentInfo)) // Step 2: Show order summary with paymentInfo
    .then((paymentInfo) => api.updateWallet(paymentInfo))     // Step 3: Update wallet with paymentInfo
    .catch((error) => {
        // This will catch if any of the above Promises fail
        console.error("An error occurred in the order process:", error);
        // You can also show an error message to the user or handle the error appropriately here
    });


    // Basic Promise syntax:
    // Creating a new Promise:
    // Example: Basic Promise that resolves or rejects based on a condition
    function asyncOperation() {
        return new Promise((resolve, reject) => {
            // Simulate an async operation (e.g., setTimeout)
            setTimeout(() => {
                const success = true; // Change to false to simulate failure
                if (!success) {
                    resolve("Operation was successful!");
                } else {
                    reject("Something went wrong.");
                }
            }, 1000); // 1 second delay to mimic async behavior
        });
    }

    const myPromise = asyncOperation();

    // Consuming a Promise:
    myPromise
        .then((result) => {
            console.log("Resolved:", result);
        })
        .catch((error) => {
            console.log("Rejected:", error);
        });
