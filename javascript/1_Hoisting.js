/*
    Hoisting in JavaScript:

    1. Definition:
       - Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of the current scope (script or function).
       - Only the declarations are hoisted, not the assignments.

    2. Variables:
       - 'var' declarations are hoisted and initialized with 'undefined'.
       - 'let' and 'const' declarations are hoisted but not initialized. Accessing them before declaration results in a ReferenceError due to the "temporal dead zone".

    3. Functions:
       - Function declarations are fully hoisted (both the definition and the body), so you can call them before they appear in the code.
       - Function expressions (including arrow functions) assigned to variables are NOT hoisted as functions. Only the variable declaration is hoisted (with 'var', it's initialized as 'undefined'), so calling them before assignment results in a TypeError.

    4. Example:
*/

// Function call before declaration (works with function declarations, not with function expressions)
getname(); // TypeError: getname is not a function (because getname is a var-assigned arrow function, not a function declaration)

console.log(x); // undefined (because 'var x' is hoisted and initialized as undefined)
console.log(getname); // undefined (because 'var getname' is hoisted and initialized as undefined)

var x = 10;

var getname = () => {
    console.log("Hello");
};

/*
    In the above code:
    - 'var x' and 'var getname' are hoisted to the top and initialized as undefined.
    - The assignment 'x = 10' and 'getname = ...' happen in place.
    - The call to getname() before its assignment throws a TypeError because at that point, getname is undefined.
    - console.log(x) prints undefined because x is hoisted but not yet assigned.
    - console.log(getname) prints undefined for the same reason.
*/
