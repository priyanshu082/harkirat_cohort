// // 'this' in the global scope (non-strict mode)
// console.log("Global scope, non-strict mode:", this); // In browsers, this === window

// function showThis() {
//     console.log("Inside function, non-strict mode:", this); // In non-strict mode, this === window (global object)
// }
// showThis();

// // 'this' in strict mode
// // "use strict";

// // 'this' in the global scope (strict mode)
// console.log("Global scope, strict mode:", this); // In strict mode, in global scope, 'this' is still the global object (window in browsers)

// function showThisStrict() {
//     console.log("Inside function, strict mode:", this); // In strict mode, this === undefined
// }
// showThisStrict();

// But when you call the function as a property of the window object (window.showThisStrict()), 
// 'this' inside the function will refer to the window object, even in strict mode.
// window.showThisStrict();


// Why is there a difference in 'this' behavior between strict mode and non-strict mode?
/*
In non-strict mode:
    - When a regular function is called without an explicit receiver (i.e., not as a method of an object), 'this' inside the function defaults to the global object (window in browsers).
    - This can lead to accidental modification of global variables and is generally considered unsafe.

In strict mode:
    - JavaScript was designed to make code more secure and less error-prone.
    - In strict mode, if a function is called without an explicit receiver, 'this' inside the function is undefined instead of defaulting to the global object.
    - This prevents accidental changes to the global object and makes bugs easier to catch, as using 'this' without context will throw an error if you try to access properties on undefined.

Summary:
    - Non-strict mode: 'this' in a regular function (not called as a method) is the global object.
    - Strict mode: 'this' in such a function is undefined.
    - This difference helps avoid accidental global variable manipulation and makes code safer.
*/


// Demonstrating 'this' with normal function and arrow function in objects

let obj = {
    a: "Priyanshu",
    // Normal function: 'this' refers to the object (obj) when called as obj.printName()
    printName: function() {
        console.log("Normal function:", this.a);
    },
    // Arrow function: 'this' does NOT refer to the object, but to the enclosing (lexical) scope
    printNameArrow: () => {
        // In this context, 'this' is NOT obj, but whatever 'this' is in the outer scope (likely window or undefined in strict mode)
        // console.log("Arrow function:", this); //global object window
        console.log("Arrow function:", this.a); //undefined
    },

    printName2: function() {
        const y =()=>{
            console.log(this);
        }
        y();
    }
};

/*
Explanation:
- In a normal function (printName), 'this' refers to the object (obj) when called as obj.printName().
- In an arrow function (printNameArrow), 'this' is lexically inherited from the surrounding scope, so it does NOT refer to obj.
*/

obj.printName();        // Output: Normal function: Priyanshu
obj.printNameArrow();   // Output: Arrow function: undefined (or value of 'a' in the outer scope, if any)


// Note: In printName2, the arrow function 'y' does not have its own 'this' binding.
// It lexically inherits 'this' from its enclosing function (printName2), so 'this' refers to 'obj'.
// Therefore, calling obj.printName2() logs the 'obj' object.
obj.printName2();       

let obj2 = {
    a: "Askhay"
}

obj.printName.call(obj2);