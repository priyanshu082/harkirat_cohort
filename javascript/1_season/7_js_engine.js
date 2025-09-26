// ========================
//   JavaScript Runtime Environment
// ========================

// A JavaScript Runtime Environment is the platform that provides everything needed to execute JavaScript code. 
// It consists of the JavaScript engine (which parses and executes JS code) and additional APIs and features 
// provided by the host environment (like browsers or Node.js).

// Key Components of a JS Runtime Environment:
// 1. JavaScript Engine: The core part (like V8, SpiderMonkey, or Chakra) that parses and runs JS code.
// 2. Web APIs (in browsers): Features like DOM, setTimeout, fetch, etc., which are not part of the JS language itself.
// 3. Callback/Task Queue: Where asynchronous callbacks (like from setTimeout or events) are queued.
// 4. Event Loop: The mechanism that moves tasks from the queue to the call stack when the stack is empty.

// Example: In a browser, the runtime environment includes the JS engine (like V8 in Chrome), the DOM API, timers, and the event loop.
// In Node.js, the runtime includes the V8 engine, Node-specific APIs (like fs, http), and its own event loop implementation.

// Visual Representation:
// [Your JS Code] --> [JS Engine] + [Host APIs] + [Event Loop] --> [Output]

// In summary: 
// The JavaScript runtime environment is everything that is needed to run JS code, including the engine and the APIs provided by the host (browser, Node.js, etc.).


// ========================
//   JavaScript Engine Explained
// ========================

// The JavaScript Engine is the core program that reads (parses), interprets, and executes JavaScript code.
// It is responsible for converting your human-readable JS code into machine code that the computer can understand and run.

// Popular JavaScript Engines:
// - V8 (used in Google Chrome and Node.js)
// - SpiderMonkey (used in Firefox)
// - JavaScriptCore (used in Safari)
// - Chakra (used in older versions of Microsoft Edge)

// Main Components of a JS Engine:
// 1. Parser: Reads your JS code and converts it into an Abstract Syntax Tree (AST).
// 2. Interpreter: Quickly converts the AST into bytecode and starts executing it.
// 3. Just-In-Time (JIT) Compiler: Optimizes frequently-run code by compiling it into highly efficient machine code for faster execution.
// 4. Garbage Collector: Automatically frees up memory that is no longer needed by your program.

// How the JS Engine Works (Simplified Steps):
// 1. Parsing: The engine parses the code and creates an AST.
// 2. Interpretation: The interpreter executes the code line by line.
// 3. Optimization: If some code runs many times (like inside loops), the JIT compiler optimizes it for better performance.
// 4. Execution: The optimized code runs much faster.
// 5. Memory Management: The garbage collector cleans up unused variables and objects to free memory.

// Example (V8 Engine):
// - When you run JS code in Chrome or Node.js, the V8 engine parses and interprets it.
// - If a function is called many times, V8's JIT compiler will optimize it for speed.

// In summary:
// The JavaScript Engine is the "brain" that makes your JS code run, handling parsing, execution, optimization, and memory management behind the scenes.
