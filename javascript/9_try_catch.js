// ===================== Error Handling in JavaScript =====================

// --------------------- 1. Basic try/catch ---------------------
// "try" ke andar wo code likhte hain jo error throw kar sakta hai
// Agar error aata hai to "catch" execute hota hai
// Agar nahi aata to "catch" skip ho jata hai

try {
    let a = 10;
    let b = a.toUpperCase(); // ❌ error: toUpperCase string ke liye hota hai
    console.log(b);
  } catch (error) {
    console.log("Error aya:", error.message); 
    // "error.message" me sirf error ka msg aata hai
    // "error.name" me error ka type (jaise TypeError)
  }
  
  
  // --------------------- 2. finally block ---------------------
  // "finally" hamesha chalega chahe error ho ya na ho
  // Mostly use hota hai cleanup (file close, db disconnect, etc.) ke liye
  
  try {
    console.log("Step 1: try block start");
    throw new Error("Kuch gadbad ho gayi"); // manual error throw
  } catch (err) {
    console.log("Step 2: catch block →", err.message);
  } finally {
    console.log("Step 3: finally block → Always chalega");
  }
  
  
  // --------------------- 3. Creating Custom Errors ---------------------
  // Hum khud bhi Error throw kar sakte hain using "throw"
  // Aur custom messages bhi de sakte hain
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("0 se divide nahi kar sakte bhai");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 0));
  } catch (err) {
    console.log("Custom Error:", err.message);
  }
  
  
  // --------------------- 4. Error Object Properties ---------------------
  // Error objects ke paas useful properties hoti hain
  
  try {
    JSON.parse("{ invalid json }"); // ❌ SyntaxError
  } catch (err) {
    console.log("Error Name:", err.name);       // SyntaxError
    console.log("Error Message:", err.message); // Unexpected token i in JSON at position 2
    console.log("Stack Trace:", err.stack);     // pura call stack
  }
  
  
  // --------------------- 5. Nested try/catch ---------------------
  // Hum multiple try/catch bhi use kar sakte hain for granular error handling
  
  try {
    try {
      let x = y + 1; // ❌ ReferenceError
    } catch (innerErr) {
      console.log("Inner Catch:", innerErr.message);
      throw innerErr; // error ko wapas bahar bhej diya
    }
  } catch (outerErr) {
    console.log("Outer Catch:", outerErr.message);
  }
  
  