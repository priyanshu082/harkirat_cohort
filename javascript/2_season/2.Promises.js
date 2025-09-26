const cart = ["item1", "item2", "item3"];

// Start the order creation process
createOrder(cart)
    .then((orderId) => {
        // orderId is the resolved value from createOrder
        console.log("Order created with ID:", orderId);
        return orderId
    })
    .then((orderId)=>{
        // Return the orderId to the next .then in the chain
        return proceedToPayment(orderId);
    })
    .then((paymentStatus) => {
        // paymentStatus is the resolved value from proceedToPayment
        console.log("Payment Status:", paymentStatus);
    })
    .catch((error) => {
        // This will catch any error from any previous promise in the chain
        //it will not catch error for the promises below that
        console.error("Error:", error.message);
    });

/**
 * Creates an order and returns a Promise.
 * Resolves with orderId if cart is valid, rejects with error otherwise.
 */
function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (!validCart(cart)) {
            const err = new Error("Cart is not valid");
            setTimeout(() => {
                reject(err);
            }, 3000); // Simulate async error
            return; // Important: stop further execution
        }

        const orderId = "1234";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000); // Simulate async order creation
        } else {
            // In case orderId is not generated (shouldn't happen here)
            const err = new Error("Order ID not generated");
            setTimeout(() => {
                reject(err);
            }, 1000);
        }
    });
}

/**
 * Proceeds to payment and returns a Promise.
 * Resolves with paymentStatus if successful, rejects with error otherwise.
 */
function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        const paymentStatus = "paid";
        if (paymentStatus && orderId) {
            setTimeout(() => {
                resolve(paymentStatus);
            }, 2000); // Simulate async payment
        } else {
            const err = new Error("Payment failed");
            setTimeout(() => {
                reject(err);
            }, 3000);
        }
    });
}

/**
 * Validates the cart.
 * Returns true if cart is valid, false otherwise.
 */
function validCart(cart) {
    // For now, always returns true. Add real validation as needed.
    return true;
}