//1. Function Statement (Function Declaration)
function a() {}
// This way of creating the function is called a function statement (or function declaration).
// It IS hoisted (the function can be called before its definition).
// It is not a variable; it is a statement.


//2. Function Expression
var b = function() {};
// This way of creating the function is called a function expression.
// Only the variable declaration (var b) is hoisted, not the function assignment.
// The function can only be called after the assignment.
// It is a variable.


//3. Anonymous Functions
// function () {}
// This is a syntax error if used alone, because functions must have a name when declared as statements.
// Anonymous functions are used as values, e.g., when passed as arguments or returned from other functions.
// Example:
function c() {
    return function() {};
}

var d = function() {};
// In this example, c is a function that returns an anonymous function.


//4. Named Function Expression
var e = function f() {};
// This way of creating the function is called a named function expression.
// Only 'e' is available in the outer scope; 'f' is only accessible inside the function body of 'f'.
// Named function expressions are NOT hoisted.


//5. Difference Between Parameters and Arguments
// Parameters are the variables declared in the function definition.
// Arguments are the values passed to the function when it is invoked.
// Example:
function g(x, y) {
    console.log(x);
    console.log(y);
}
g(10, 20);
// Here, x and y are parameters; 10 and 20 are arguments.


//6. First Class Functions
// Functions can be used like values (assigned to variables, passed as arguments, returned from other functions).
// Functions are first class citizens in JavaScript.
// Example:
var h = function() {};
var i = h;
// Here, h and i reference the same function.
// Example:
function j() {
    return function() {};
}
var k = j();
// Here, k is referencing the function returned by j.


//7. Arrow Functions
// Arrow functions are a shorthand for writing functions.
// Example: Traditional function expression
var l = function(x, y) {
    return x + y;
};
// This defines a function 'l' that takes two arguments and returns their sum.

// Example: Arrow function
var m = (x, y) => {
    return x + y;
};
// This is an arrow function, which is a shorter syntax for writing functions in JavaScript.
// It does the same thing as 'l': takes two arguments and returns their sum.

// Note: If you omit the curly braces in an arrow function, the expression is returned automatically:
var n = (x, y) => x + y;
// This is equivalent to the above, but even shorter. The result of x + y is returned.

// Important: If you use curly braces in an arrow function, you must use 'return' to return a value.
// For example:
//   var o = (x, y) => { x + y } // This does NOT return anything!
// Always use 'return' inside curly braces, or omit the braces for an implicit return.

