// Difference between undefined and not defined in JavaScript

// 1. undefined:
// - "undefined" ek special value hai jo JavaScript kisi variable ko tab deta hai jab usko declare to kiya gaya ho, lekin koi value assign nahi ki gayi ho.
// - Example:
var a;
console.log(a); // Output: undefined

// 2. not defined:
// - "not defined" ka matlab hai ki variable ko kabhi declare hi nahi kiya gaya hai. Agar aap aise variable ko access karne ki koshish karte hain, to JavaScript ReferenceError throw karta hai.
// - Example:
console.log(b); // Output: ReferenceError: b is not defined

// Summary:
// - "undefined" => variable declare hua hai, par value assign nahi hui.
// - "not defined" => variable declare hi nahi hua hai.
