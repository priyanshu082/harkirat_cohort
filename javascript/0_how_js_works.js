// --- Actual code ---
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
let value = 10;
console.log(value);

/*
GEC (Global Execution Context) Creation:

1. Memory Creation Phase (Hoisting):
   - n: undefined
   - square: function definition (hoisted)
   - square2: undefined
   - square4: undefined
   - value: uninitialized (in TDZ due to let)

2. Code Execution Phase (Line by Line Execution):
   - var n = 2;                  // n = 2
   - function square(num) {...}  // already in memory

   - var square2 = square(n);    // square(2) called:
                                 //   - New EC for square
                                 //   - Memory Phase in square EC:
                                 //       - num: 2
                                 //       - ans: undefined
                                 //   - Execution Phase in square EC:
                                 //       - ans = 2 * 2 = 4
                                 //       - return 4
                                 // square2 = 4

   - var square4 = square(4);    // square(4) called:
                                 //   - New EC for square
                                 //   - Memory Phase in square EC:
                                 //       - num: 4
                                 //       - ans: undefined
                                 //   - Execution Phase in square EC:
                                 //       - ans = 4 * 4 = 16
                                 //       - return 16
                                 // square4 = 16

   - let value = 10;             // value = 10
   - console.log(value);         // logs 10

Final values in GEC:
n = 2
square = function
square2 = 4
square4 = 16
value = 10
*/



var x=1;
a()
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}


/*
GEC (Global Execution Context) Creation for this code:

1. Memory Creation Phase (Hoisting):
   - x: undefined
   - a: function definition (hoisted)
   - b: function definition (hoisted)

2. Code Execution Phase (Line by Line Execution):
   - var x = 1;         // x = 1
   - a();               // Calls function a:
                        //   - New EC for a
                        //   - Memory Phase in a EC:
                        //       - x: undefined
                        //   - Execution Phase in a EC:
                        //       - var x = 10; // x = 10 (local to a)
                        //       - console.log(x); // logs 10
   - b();               // Calls function b:
                        //   - New EC for b
                        //   - Memory Phase in b EC:
                        //       - x: undefined
                        //   - Execution Phase in b EC:
                        //       - var x = 100; // x = 100 (local to b)
                        //       - console.log(x); // logs 100
   - console.log(x);    // logs 1 (global x)

Final values in GEC:
x = 1
a = function
b = function

Output:
10
100
1
*/
