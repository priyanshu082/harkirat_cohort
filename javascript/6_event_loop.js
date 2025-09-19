
// /*
// ========================
//   JavaScript Event Loop
// ========================

// JavaScript is a single-threaded, non-blocking, asynchronous, concurrent language. This is made possible by the event loop, which is a fundamental concept for understanding how JavaScript handles asynchronous operations like setTimeout, promises, DOM events, and more.

// ------------------------
//   1. Call Stack
// ------------------------
// - The call stack is where JavaScript keeps track of what function is currently running and what functions are called from within that function.
// - It operates in a LIFO (Last In, First Out) manner.
// - When a function is called, it is pushed onto the stack. When it returns, it is popped off.

// Example:
// function foo() {
//     console.log('foo');
// }
// function bar() {
//     foo();
//     console.log('bar');
// }
// bar();
// // Call stack: bar() -> foo() -> console.log('foo') -> foo() returns -> console.log('bar') -> bar() returns

// ------------------------
//   2. Web APIs (Browser APIs)
// ------------------------
// - JavaScript engines in browsers provide access to Web APIs (like setTimeout, DOM events, AJAX/fetch, etc).
// - These APIs are not part of the JavaScript language itself, but are provided by the browser environment.
// - When you call setTimeout, for example, the timer is handled by the browser, not by the JS engine.

// ------------------------
//   3. Callback Queue (Task Queue / Message Queue)
// ------------------------
// - When an asynchronous operation (like setTimeout, or an event listener) completes, its callback is placed in the callback queue.
// - The callback queue is a simple FIFO (First In, First Out) queue.

// ------------------------
//   4. Event Loop
// ------------------------
// - The event loop is a process that constantly checks if the call stack is empty.
// - If the call stack is empty, it takes the first callback from the callback queue and pushes it onto the call stack for execution.
// - This is how asynchronous code is executed after synchronous code finishes.

// ------------------------
//   5. Microtask Queue (Job Queue)
// ------------------------
// - Microtasks include promise callbacks (then/catch/finally), MutationObservers, and queueMicrotask.
// - Microtasks have higher priority than the callback queue (macrotask queue).
// - After every task from the callback queue, the event loop will execute all microtasks before moving to the next task.

// ------------------------
//   6. Example: setTimeout and Promises
// ------------------------
// console.log('Start');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise');
// });

// console.log('End');

// /*
// Output:
// Start
// End
// Promise
// setTimeout

// Explanation:
// - 'Start' and 'End' are synchronous, so they run first.
// - Promise's .then is a microtask, so it runs before setTimeout (which is a macrotask).
// */

// ------------------------
//   7. Visual Representation
// ------------------------
// Call Stack      Web APIs         Callback Queue
//    |                |                  |
//    |                |                  |
//    v                v                  v

// [main()]   <--- setTimeout() --->  [callback]
//            <--- fetch()     --->  [callback]
//            <--- click event --->  [callback]

// Event Loop: If call stack is empty, move callback from queue to stack.

// ------------------------
//   8. Summary Table
// ------------------------
// | Operation         | Where it goes      | Priority         |
// |-------------------|-------------------|------------------|
// | setTimeout        | Callback Queue     | Macrotask        |
// | setInterval       | Callback Queue     | Macrotask        |
// | DOM Events        | Callback Queue     | Macrotask        |
// | fetch().then      | Microtask Queue    | Microtask        |
// | Promise.then      | Microtask Queue    | Microtask        |
// | queueMicrotask    | Microtask Queue    | Microtask        |

// ------------------------
//   9. Infinite Event Loop Example
// ------------------------
// while(true) {
//     // This will block the event loop!
// }

// - If the call stack is never empty (e.g., due to an infinite loop), no callbacks from the queue will ever be executed.

// ------------------------
//   10. Node.js Event Loop
// ------------------------
// - Node.js also uses an event loop, but with some differences (e.g., additional queues/phases like timers, I/O callbacks, check, close callbacks, etc).
// - The core idea is the same: non-blocking, asynchronous execution.

// ------------------------
//   11. Key Takeaways
// ------------------------
// - JavaScript is single-threaded, but can handle async operations via the event loop.
// - Web APIs handle async tasks and put callbacks in the queue.
// - The event loop moves callbacks to the call stack when it's empty.
// - Microtasks (promises) are always executed before macrotasks (setTimeout, etc).

// ------------------------
//   12. Demo: Event Loop in Action
// ------------------------
// function printOrder() {
//     console.log('1');
//     setTimeout(() => console.log('2'), 0);
//     Promise.resolve().then(() => console.log('3'));
//     console.log('4');
// }
// printOrder();
// // Output: 1, 4, 3, 2

// */



