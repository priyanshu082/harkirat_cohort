/*
==========================================================
    SHADOWING IN JAVASCRIPT
==========================================================
    1. What is shadowing in JavaScript?
       - When a variable declared within a certain scope (e.g., function or block) has the same name as a variable in an outer scope, the inner variable "shadows" the outer one.

    2. Example: Shadowing
*/

// Example: Shadowing
let a = 100;
var b = 100;
function testShadow() {
    let a = 20;
    var b = 30;
    console.log(a); // output: 20
    console.log(b); // output: 30
}
testShadow();
console.log(a); // output: 100
console.log(b); // output: 100
// Reason: 'let a' and 'var b' inside the function are local to the function. The global 'b' is not affected by the inner 'var b' due to function scoping, so after the function runs, global 'b' remains 100.

// Example: Shadowing with let/var in block scope

let c = 100;
var d = 100;

{
    let c = 20;   // This 'c' is block-scoped and shadows the outer 'c'
    var d = 30;   // This 'd' is function/global-scoped, so it overwrites the outer/global 'd'
    console.log(c); // 20 (block-scoped 'c')
    console.log(d); // 30 (global 'd' is now 30)
}

console.log(c); // 100 (outer 'c' is unchanged)
console.log(d); // 30 (global 'd' was overwritten inside the block)

/*
    3. Example: Hoisting and Shadowing
*/

// Example: Hoisting and Shadowing
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
    4. Example: Illegal Shadowing

    - Illegal shadowing occurs when you try to declare a variable with 'let' or 'const' in a block scope,
      but there is already a variable with the same name declared with 'var' in an outer (function or global) scope.
    - This is not allowed because 'let' and 'const' are block-scoped, but 'var' is function/global-scoped,
      and JavaScript prevents this kind of shadowing to avoid confusion.

    Example:
*/

var z = 10;
{
    // let z = 20; // ❌ SyntaxError: Identifier 'z' has already been declared
    // Uncommenting the above line will throw an error because 'z' was already declared with 'var' in the outer scope.
    // This is called "illegal shadowing".
}

// However, the reverse is allowed:
let y = 10;
{
    // var y = 20; // ✅ This is allowed, but not recommended. 'var y' is hoisted to the outer/global scope.
    // console.log(y); // 20
}
console.log(y); // 20
