const fetchData = async () => {
    const result= await fetch('https://jsonplacehoer.typicode.com/posts');
    const jsonValue= result.json()
    return jsonValue;
}

const data=fetchData();
data.then((data)=>{
    console.log(data[0])
}).catch((err)=>{
    console.log(err)
})


/*
Example output for the Response object (in browser console):

Exact Response object: Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
Status: 200
Status Text: OK
Headers: Headers {}
Type: cors
URL: https://jsonplaceholder.typicode.com/posts

Example output for the JSON data (truncated):

Exact JSON data: [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum..."
  },
  ...
]
*/

/*
Good Interview Questions on async/await in JavaScript (with Answers):

1. What is the difference between using `async/await` and using `.then()`/`.catch()` with Promises? When would you prefer one over the other?

   **Answer:**  
   `async/await` is syntactic sugar over Promises that allows you to write asynchronous code in a synchronous style, making it easier to read and maintain. `.then()`/`.catch()` uses callbacks and can lead to nested code (callback hell) if not managed well.  
   Prefer `async/await` for sequential asynchronous operations and when you want cleaner, more readable code. Use `.then()`/`.catch()` when you need to handle multiple independent promises or for simple chains.

2. Can you explain what happens if you use `await` outside of an `async` function? What error do you get?

   **Answer:**  
   If you use `await` outside of an `async` function, JavaScript throws a syntax error:  
   `SyntaxError: await is only valid in async functions and the top level bodies of modules`.  
   `await` can only be used inside functions declared with `async` or at the top level in ES modules.

3. How can you handle errors in async/await code? Show two different ways to catch errors from an awaited promise.

   **Answer:**  
   - Using `try...catch` block:
     ```js
     async function example() {
         try {
             const data = await fetch('url');
         } catch (err) {
             console.error(err);
         }
     }
     ```
   - Catching the rejected promise:
     ```js
     async function example() {
         const data = await fetch('url').catch(err => {
             console.error(err);
         });
     }
     ```

4. What happens if you `await` multiple promises sequentially vs. in parallel? Write code to demonstrate the difference and explain the performance implications.

   **Answer:**  
   - Sequentially (slower, waits for each to finish before starting the next):
     ```js
     async function sequential() {
         const a = await fetch(url1);
         const b = await fetch(url2);
     }
     ```
   - In parallel (faster, both start at the same time):
     ```js
     async function parallel() {
         const [a, b] = await Promise.all([fetch(url1), fetch(url2)]);
     }
     ```
   Sequential execution takes the sum of both durations; parallel takes the maximum.

5. How would you implement a function that runs several async tasks in sequence, and another that runs them in parallel, using async/await?

   **Answer:**  
   - Sequence:
     ```js
     async function runInSequence(tasks) {
         for (const task of tasks) {
             await task();
         }
     }
     ```
   - Parallel:
     ```js
     async function runInParallel(tasks) {
         await Promise.all(tasks.map(task => task()));
     }
     ```

6. What is the return value of an async function? How can you access the resolved value?

   **Answer:**  
   An async function always returns a Promise. The resolved value of the Promise is whatever you return from the function.  
   You can access it using `.then()` or by `await`ing the function:
   ```js
   async function foo() { return 42; }
   foo().then(val => console.log(val)); // 42

   // or
   const val = await foo();
   console.log(val); // 42
   ```
*/

