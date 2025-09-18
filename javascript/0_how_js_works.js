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
