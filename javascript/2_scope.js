/*
    Block in JavaScript

    - A block is a pair of curly braces `{ ... }` used to group zero or more statements.
    - Blocks are commonly used in control structures (if, for, while, etc.) and to create new scopes with `let` and `const`.
    - Variables declared with `var` inside a block are NOT block-scoped (they are function or globally scoped).
    - Variables declared with `let` and `const` inside a block ARE block-scoped (they exist only within that block).

    Example:
*/

{
    // This is a block
    let blockScoped = "I exist only in this block";
    var notBlockScoped = "I exist outside the block too";
    console.log(blockScoped); // Works
}
try {
    console.log(blockScoped); // ReferenceError: blockScoped is not defined
} catch (e) {
    console.log("blockScoped is not accessible outside the block");
}
console.log(notBlockScoped); // Works: var is not block-scoped

/*
    Summary:
    - Use blocks to group statements and create new scopes for `let` and `const`.
    - `var` ignores block scope, but `let` and `const` respect it.
*/



var b;
function a(){
    console.log(b);
}
b = 10; //b is hoisted to the top of the scope
a();
// b=10 is not hoisted to the top of the scope it is still undefined
/*
    Lexical Environment and Scope in JavaScript

    1. Lexical Environment:
       - A Lexical Environment is a structure that holds identifier-variable mapping (i.e., where variable names are mapped to the values).
       - It consists of two components:
         a) The environment record: an object that stores all local variables as its properties.
         b) A reference to the outer (parent) lexical environment.

    2. Scope:
       - Scope determines the accessibility (visibility) of variables.
       - JavaScript uses lexical (static) scoping, which means the scope of a variable is determined by its position in the source code (where it is written).
       - There are three main types of scope:
         a) Global Scope
         b) Function/Local Scope
         c) Block Scope (introduced with ES6: let, const)

    3. Example: Lexical Environment and Scope

*/

// Global Scope
var globalVar = "I am global";

function outer() {
    // Function Scope (outer)
    var outerVar = "I am in outer";

    function inner() {
        // Function Scope (inner)
        var innerVar = "I am in inner";
        console.log(globalVar); // Accessible: I am global
        console.log(outerVar);  // Accessible: I am in outer
        console.log(innerVar);  // Accessible: I am in inner
    }

    inner();
    // console.log(innerVar); // Error: innerVar is not defined (not accessible here)
}

outer();
// console.log(outerVar); // Error: outerVar is not defined (not accessible here)

/*
    Block Scope Example (let, const)
*/

if (true) {
    let blockLet = "I am block scoped";
    const blockConst = "I am also block scoped";
    var blockVar = "I am function or global scoped";
    // blockLet and blockConst are only accessible inside this block
}
// console.log(blockLet); // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined
console.log(blockVar); // Accessible: I am function or global scoped

/*
    How Lexical Environment Works:
    - When a function is executed, a new Lexical Environment is created.
    - It first looks for variables in its own environment record.
    - If not found, it looks up the chain to the outer environment (parent), and so on, until the global environment.
*/

/*
    Interview Questions on Lexical Environment and Scope:

    1. What is a lexical environment in JavaScript?
       - It's the structure that holds variable and function declarations and references to its parent environment.

    2. What is the difference between scope and lexical environment?
       - Scope is the set of rules for variable access; lexical environment is the actual data structure that implements those rules.

    3. What is lexical scoping?
       - Lexical scoping means that the scope of a variable is determined by its location within the source code.

    4. What is the difference between var, let, and const in terms of scope?
       - var is function-scoped, let and const are block-scoped.

    5. What is a closure?
       - A closure is a function that remembers its outer variables and can access them even after the outer function has finished executing.

    6. Can you give an example of closure?
*/

// Closure Example
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter();
console.log(counter2()); // 1

/*
    7. What will be the output of the following code?
*/

var x = 1;
function foo() {
    console.log(x);
    var x = 2;
    console.log(x);
}
foo();
// Output:
// undefined
// 2
// Explanation: Due to hoisting, 'var x' inside foo shadows the global x, but is undefined until assigned.

/*
    8. What is the temporal dead zone?
       - The period between entering scope and variable declaration (with let/const) where the variable cannot be accessed.
*/

// Example:
{
    // console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 5;
}

/*
    9. How does the scope chain work?
       - When resolving a variable, JavaScript looks in the current scope, then the parent scope, and so on up to the global scope.

    10. What is the global object in JavaScript?
        - In browsers, it's 'window'; in Node.js, it's 'global'. Variables declared with var in the global scope become properties of the global object.

    11. Can you access a variable declared inside a function from outside?
        - No, unless you return it or expose it via closure.

    12. What is shadowing in JavaScript?
        - When a variable declared within a certain scope (e.g., function or block) has the same name as a variable in an outer scope, the inner variable "shadows" the outer one.

    Example:
*/

let shadow = "outer";
function testShadow() {
    let shadow = "inner";
    console.log(shadow); // inner
}
testShadow();
console.log(shadow); // outer

/*
    13. What is the difference between execution context and lexical environment?
        - Execution context is a concept that contains the lexical environment, variable environment, and 'this' binding. Lexical environment is part of the execution context.
*/

/*
    Summary:
    - Lexical Environment: Structure holding variable/function declarations and reference to parent.
    - Scope: Rules for variable access.
    - Scope Chain: Chain of lexical environments for variable resolution.
    - Closure: Function with access to its lexical environment even after the parent function has finished.
    - var: function-scoped, let/const: block-scoped.
    - Temporal Dead Zone: let/const inaccessible before declaration.
    - Shadowing: Inner variable with same name as outer variable.
*/
