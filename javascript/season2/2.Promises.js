
const cart=["item1","item2","item3"]

const order=createOrder(cart)
console.log(order)

order
.then((order)=>{
    console.log(order)
})
.catch((error)=>{
    console.log(error)
})


function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validCart(cart)){
            const err= new Error("Cart is not valid")
            setTimeout(()=>{
                reject(err)
            },3000)
            // reject(err)
        }

        const orderId="1234"
        if(orderId){
            setTimeout(()=>{
                resolve(orderId)
            }, 5000)
        }
    })

    return pr;
}


function validCart(cart){
    return false ;
}