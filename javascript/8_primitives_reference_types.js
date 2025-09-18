// ===================== Primitives vs Reference Types =====================

// --------------------- 1. Primitives ---------------------
// JS me primitive types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
// Inke values directly "stack" me store hote hain.
// Copy karne pe ek nayi copy banti hai, aur ek dusre se independent hote hain.

let a = 10; // primitive
let b = a;  // yaha b me a ki value copy hogayi
b = 20;     // b badal diya

console.log(a); // 10 (unchanged)
console.log(b); // 20
// 👉 matlab primitive types copy hote hain, reference nahi share karte.


// --------------------- 2. Reference Types ---------------------
// JS me reference types: Objects, Arrays, Functions
// Ye values directly stack me nahi bante, balki ek memory address (reference) store hota hai jo "heap" me data point karta hai.
// Isiliye agar hum ek object/array dusre variable me assign karte hain to dono same memory ko point karte hain.

let obj1 = { name: "Priyanshu" };
let obj2 = obj1; // obj2 ko obj1 ka reference mil gaya

obj2.name = "Vartika"; // obj2 se change kiya

console.log(obj1.name); // "Vartika" (obj1 bhi change hogaya kyunki dono same reference share karte hain)
console.log(obj2.name); // "Vartika"


// --------------------- 3. Comparing Primitives vs Reference ---------------------
// Primitive compare hote hain by VALUE
console.log(10 === 10); // true
console.log("hello" === "hello"); // true

// Reference compare hote hain by REFERENCE (memory address)
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (dono alag reference hain even though values same hain)

let arr3 = arr1;
console.log(arr1 === arr3); // true (same reference)

// --------------------- 4. Copying Reference Properly ---------------------
// Agar hume object/array ki "copy" chahiye bina reference share kiye to
// shallow copy ya deep copy ka concept aata hai.

// ===================== Shallow Copy =====================
// Shallow copy ka matlab hai sirf top-level properties ki copy banti hai.
// Agar object ke andar nested object/array hai, to unka reference hi copy hota hai.
// JS me shallow copy banane ke liye spread operator (...) ya Object.assign() use karte hain.

let original = { x: 1, y: 2, nested: { z: 5 } };

// Shallow copy
let shallowCopy = { ...original };
shallowCopy.x = 100; // sirf x change kiya
console.log(original.x); // 1 (unchanged) - top-level property independent hai

shallowCopy.nested.z = 999; // nested object change kiya
console.log(original.nested.z); // 999 (ye bhi change ho gaya!)
// 👉 Kyunki nested object ka reference same hai, isliye andar ka data share hota hai

// ===================== Deep Copy =====================
// Deep copy ka matlab hai object ke andar jitne bhi nested objects/arrays hain, unki bhi nayi copy ban jaye.
// Matlab bilkul independent ho jaye original se, koi bhi level pe change karo, dusra effect nahi hoga.

// Deep copy banane ke liye ek simple tarika hai JSON methods (sirf simple objects/arrays ke liye):
let deepOriginal = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(deepOriginal));

deepCopy.b.c = 999;
console.log(deepOriginal.b.c); // 2 (unchanged) - ab koi reference share nahi ho raha

// Note: JSON method me kuch limitations hain (functions, undefined, Date, etc. copy nahi hote).
// Advanced deep copy ke liye lodash ka _.cloneDeep() ya custom recursive function use karte hain.

// Summary (Hinglish):
// - Shallow copy: sirf upar-upar ki copy, andar ka reference share hota hai
// - Deep copy: har level pe nayi copy, bilkul independent
