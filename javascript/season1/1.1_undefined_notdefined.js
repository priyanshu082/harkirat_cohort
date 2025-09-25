// Difference between undefined, null, and not defined in JavaScript

// 1. undefined:
// - "undefined" ek special value hai jo JavaScript kisi variable ko tab deta hai jab usko declare to kiya gaya ho, lekin koi value assign nahi ki gayi ho.
// - Example:
var a;
console.log(a); // Output: undefined

// 2. null:
// - "null" ek special value hai jo developer khud assign karta hai, jab wo batana chahta hai ki variable "khaali" hai ya usme koi value nahi hai. Yeh intentional emptiness ko represent karta hai.
// - Example:
var c = null;
console.log(c); // Output: null

// 3. not defined:
// - "not defined" ka matlab hai ki variable ko kabhi declare hi nahi kiya gaya hai. Agar aap aise variable ko access karne ki koshish karte hain, to JavaScript ReferenceError throw karta hai.
// - Example:
console.log(b); // Output: ReferenceError: b is not defined

// Summary:
// - "undefined" => variable declare hua hai, par value assign nahi hui.
// - "null" => variable declare hua hai, aur usko khaali (empty) value di gayi hai (intentionally).
// - "not defined" => variable declare hi nahi hua hai.
