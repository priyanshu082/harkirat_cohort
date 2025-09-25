//what is callback fucntions in a javascript
// A callback function in JavaScript is a function that is passed as an argument to another function
// and is executed after some operation has been completed. Callbacks are used to handle asynchronous
// operations like reading files, making API calls, or handling events.

// Example:
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Priyanshu", sayGoodbye);
// Output:
// Hello, Priyanshu
// Goodbye!

// In this example, 'sayGoodbye' is a callback function passed to 'greet' and called after greeting.



// --------------------  --------------------
// --------------------  --------------------
// --------------------  --------------------


// javascript is a synchronous and single threaded language
// It executes one command at a time in the order they appear.
// This means only one task runs at a time, and others must wait.

//blocking of main thread
// If a task takes too long to finish, it blocks the main thread.
// This prevents other code from running until the current task completes.
