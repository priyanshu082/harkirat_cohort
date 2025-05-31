// A Promise is an object which represents eventual completion or failure of an asynchronous operation. Promises are immutable once resolved and they give us a lot of control over our code. They have three state pending, fulfilled or rejected. The promise object contains two parts 1) PromiseState(stores the sate of the prmise) and 2)PromiseResult(stores data)



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


api.createOrder(cart)
    .then((orderId)=>  api.checkOut(orderId))
    .then((payemntInfo)=> api.showOrderSummary(payemntInfo))
    .then((payemntInfo)=>api.updateWallet(payemntInfo))


