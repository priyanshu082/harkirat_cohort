// --- Understanding call, apply, and bind in JavaScript ---

// Let's define an object:
const name = {
  firstName: "Priyanshu",
  lastName: "Singh",
};

// A function that uses 'this':
function printFullName(city, country) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
}

// Another object:
const name2 = {
  firstName: "Alice",
  lastName: "Johnson",
};

/*
  1. Function Borrowing:
     Sometimes, you want to use a method from one object with another object.
     call, apply, and bind help you do this by setting the value of 'this' inside the function.
*/

/*
  2. call():
     Syntax: function.call(thisArg, arg1, arg2, ...)
     - The first parameter (thisArg) is the object to be used as 'this' inside the function.
     - The rest are arguments passed to the function, one by one.
     - The function is invoked immediately.
*/
printFullName.call(name, "Delhi", "India");    // Priyanshu Singh from Delhi, India
printFullName.call(name2, "London", "UK");     // Alice Johnson from London, UK

/*
  3. apply():
     Syntax: function.apply(thisArg, [argsArray])
     - The first parameter (thisArg) is the object to be used as 'this'.
     - The second parameter is an array (or array-like object) of arguments.
     - The function is invoked immediately.
*/
printFullName.apply(name, ["Mumbai", "India"]);    // Priyanshu Singh from Mumbai, India
printFullName.apply(name2, ["Paris", "France"]);   // Alice Johnson from Paris, France

/*
  4. bind():
     Syntax: function.bind(thisArg, arg1, arg2, ...)
     - The first parameter (thisArg) is the object to be used as 'this'.
     - The rest are arguments to be pre-set (optional).
     - Returns a new function with 'this' and (optionally) some arguments fixed.
     - The function is NOT invoked immediately; you call it later.
*/
const printForName = printFullName.bind(name, "Bangalore", "India");
printForName(); // Priyanshu Singh from Bangalore, India

const printForName2 = printFullName.bind(name2);
printForName2("Berlin", "Germany"); // Alice Johnson from Berlin, Germany

/*
  Summary:
  - call: Passes 'this' and arguments one by one, invokes immediately.
  - apply: Passes 'this' and arguments as an array, invokes immediately.
  - bind: Passes 'this' and (optionally) arguments, returns a new function to be called later.

  The first argument to call/apply/bind is always the value to be used as 'this' inside the function.
  The rest of the arguments are passed to the function as its parameters.
*/
