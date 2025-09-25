// ===================== Prototype & Inheritance in JS =====================

// ===================== PROTOTYPE KO TAMEEZ SE SAMAJHO =====================

// 1. Prototype kya hai?
// --------------------------------------------------
// Jab bhi JS me koi function banta hai (chahe wo class ho ya normal function),
// uske sath ek "prototype" naam ka object automatically attach ho jata hai.
// Is prototype object me aap methods/properties rakh sakte ho,
// jo us function se banne wale sabhi objects ko milti hain (shared hoti hain).

// Example: Class ke through
class Person {
  constructor(name) {
    this.name = name; // ye har object ki apni property hai
  }
}

// Prototype pe method add karte hain (ye sabko milega, memory efficient)
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

let p1 = new Person("Priyanshu");
p1.sayHello(); // "Hello, my name is Priyanshu"

// Prototype chain kaise kaam karti hai?
// Jab aap p1.sayHello() likhte ho, JS pehle p1 me dhundhta hai,
// nahi milta to p1.__proto__ (yaani Person.prototype) me dekhta hai.

// Check karo:
console.log(p1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (chain ka end)

// --------------------------------------------------
// 2. Prototype Chain kya hoti hai?
// --------------------------------------------------
// Jab JS kisi property/method ko object me nahi paata,
// to wo uske prototype (parent) me dhundhta hai, fir uske parent ke prototype me... (ye chain chalta rehta hai).

let arr = [1, 2, 3];
// arr.length -- JS pehle arr me dekhega, nahi mila to arr.__proto__ (Array.prototype) me dekhega
console.log(arr.length); // 3
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

// --------------------------------------------------
// 3. __proto__ kya hai?
// --------------------------------------------------
// __proto__ ek hidden property hai jo har object me hoti hai,
// aur wo us object ke parent prototype ko point karti hai.

function Car(model) {
  this.model = model;
}
let c1 = new Car("BMW");

console.log(c1.__proto__ === Car.prototype); // true
// c1.__proto__ --> Car.prototype
// Car.prototype.__proto__ --> Object.prototype

// --------------------------------------------------
// 4. Object.create ka use
// --------------------------------------------------
// Object.create se aap manually kisi bhi object ka prototype set kar sakte ho.

let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

let rabbit = Object.create(animal); // rabbit ka prototype = animal
rabbit.jump = true;

console.log(rabbit.eats); // true (inherited from animal)
rabbit.walk();            // "Animal walks"
console.log(rabbit.jump); // true (own property)

// --------------------------------------------------
// 5. Inheritance (function-based, ES5 style)
// --------------------------------------------------

// Step 1: Parent constructor function
function Animal(name) {
  this.name = name;
}

// Step 2: Parent ke prototype pe method
Animal.prototype.speak = function () {
  console.log(this.name + " makes a noise");
};

// Step 3: Child constructor function
function Dog(name) {
  Animal.call(this, name); // Parent constructor ko call karo (this set karo)
}

// Step 4: Inheritance set karo (Dog.prototype ko Animal.prototype se link karo)
Dog.prototype = Object.create(Animal.prototype);

// Step 5: Dog.prototype ka constructor wapas Dog pe set karo
Dog.prototype.constructor = Dog;

// Step 6: Dog ke prototype pe apna method (override)
Dog.prototype.speak = function () {
  console.log(this.name + " barks");
};

// Step 7: Use karo
let d = new Dog("Sheru");
d.speak(); // "Sheru barks"

// Step 8: Prototype chain check karo
console.log(d.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true

// ===================== SUMMARY (Tameez se) =====================
// - Prototype ek object hai jo har function/class ke sath hota hai.
// - Usme methods/properties rakhoge to sab instances ko milenge (shared).
// - Jab JS property/method nahi paata, to prototype chain follow karta hai.
// - Inheritance me child ka prototype parent ke prototype se link hota hai.
// - __proto__ se chain banti hai, aur Object.prototype pe chain khatam ho jati hai (null).

// Agar ab bhi doubt hai, ek baar console.log se chain dekh lo, ya khud experiment karo!