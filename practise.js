function slowSquare(n) { 
  // The Promise executor runs synchronously, so this logs immediately:
  let prom = new Promise((resolve, reject) => {
    console.log("run before 25");
    resolve("done for the promise");
  });

  // .then() callbacks are always asynchronous (microtask queue), so this logs after the synchronous code finishes:
  prom.then(() => console.log("Run after 25"));
  
  // This return happens before the .then() callback runs:
  return n * n; 
}

console.log(slowSquare(5));
// Output:
// run before 25
// 25
// Run after 25
// Explanation:
// 1. "run before 25" is logged synchronously when the Promise is created.
// 2. slowSquare returns 25, which is logged by console.log.
// 3. The .then() callback runs after the current call stack, logging "Run after 25".