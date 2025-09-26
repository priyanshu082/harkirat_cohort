/*
    Difference between TypeError, ReferenceError, and SyntaxError in JavaScript
*/

// 1. TypeError
// A TypeError occurs when a value is not of the expected type, or an operation is performed on a value of the wrong type.

try {
    null.f(); // Trying to call a function on null
} catch (e) {
    console.log("TypeError Example:", e.message); // Cannot read properties of null (reading 'f')
}

// Another TypeError example:
try {
    let num = 5;
    num(); // Trying to call a number as a function
} catch (e) {
    console.log("TypeError Example 2:", e.message); // num is not a function
}

// 2. ReferenceError
// A ReferenceError occurs when code refers to a variable that does not exist (is not declared or is out of scope).

try {
    console.log(notDeclaredVar); // Variable is not declared anywhere
} catch (e) {
    console.log("ReferenceError Example:", e.message); // notDeclaredVar is not defined
}

// 3. SyntaxError
// A SyntaxError occurs when code is not written in valid JavaScript syntax. These errors are detected at parse time, before the code runs.

try {
    // eval allows us to catch syntax errors at runtime
    eval('let a = ;'); // Invalid syntax
} catch (e) {
    console.log("SyntaxError Example:", e.message); // Unexpected token ';'
}

// 4. Temporal Dead Zone (TDZ)
// The TDZ is the time between entering a scope and the actual variable declaration (with let or const) where the variable cannot be accessed.

try {
    // Accessing 'x' before its declaration will throw a ReferenceError due to TDZ
    console.log(x); // TDZ: x is not defined yet
    let x = 10;
} catch (e) {
    console.log("TDZ Example:", e.message); // Cannot access 'x' before initialization
}

// Best way to avoid TDZ (Temporal Dead Zone):
// - Always declare variables with let/const at the top of their scope, before you use them.
// - Do not try to access variables before their declaration.
// Example:

{
    // Good practice: declare before use
    let safeVar = 42;
    console.log("No TDZ:", safeVar); // 42
}

// Avoid patterns like this:
{
    // console.log(badVar); // Uncommenting this line will throw ReferenceError (TDZ)
    let badVar = 100;
}

// In summary: To avoid TDZ, always declare (let/const) variables before accessing them in their scope.


/*
    Summary:
    - TypeError: Operation on a value of the wrong type (e.g., calling a non-function, accessing property of null/undefined).
    - ReferenceError: Referring to a variable that is not declared or is out of scope.
    - SyntaxError: Code is not valid JavaScript syntax (detected before execution).
    - TDZ (Temporal Dead Zone): The period between entering scope and variable declaration (with let/const) where the variable cannot be accessed.
*/
