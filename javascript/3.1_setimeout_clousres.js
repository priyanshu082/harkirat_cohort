// most important concept of setimout and closure
for(var i=0;i<=5;i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}
// write output of the above
// Output:
// 6
// 6
// 6
// 6
// 6
// 6
// (Each number is printed after 0s, 1s, 2s, 3s, 4s, 5s respectively, but all are 6)
//
// Explanation:
// Because 'var' is function-scoped, by the time the setTimeout callbacks run, the loop has finished and 'i' is 6.
// All callbacks reference the same 'i', so all print 6.


// but we can eleminate this by using the let
for(let i=0;i<=5;i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}
// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// (Each number is printed after 0s, 1s, 2s, 3s, 4s, 5s respectively)
//
// Explanation:
// Because 'let' is block-scoped, each iteration of the loop gets its own 'i' value.
// The setTimeout callback closes over the correct 'i' for each iteration.


// Simple function to capture the value of 'i' using closure


for (var i = 0; i <= 5; i++) {
    function printWithDelay(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    printWithDelay(i);
}
// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// (Each number is printed after 0s, 1s, 2s, 3s, 4s, 5s respectively)
//
// Explanation:
// The function 'printWithDelay' creates a closure for each value of 'i' passed to it,
// so setTimeout callback prints the correct value.

