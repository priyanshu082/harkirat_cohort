/***********************
 Q1: How do you create objects in JavaScript?
***********************/

// a) Object Literal
const obj1 = { name: "Priyanshu", age: 21 };

// b) new Object()
const obj2 = new Object();
obj2.name = "Priyanshu";

// c) Constructor Function
function PersonCF(name, age) {
  this.name = name;
  this.age = age;
}
const obj3 = new PersonCF("Priyanshu", 21);

// d) ES6 Class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj4 = new PersonClass("Priyanshu", 21);

// e) Object.create()
const proto1 = { greet: function () { console.log("Hello!"); } };
const obj5 = Object.create(proto1);
obj5.name = "Priyanshu";


/***********************
 Q2: What are prototypes in JavaScript?
***********************/
// Every function has a 'prototype' object where shared methods are stored.
// Objects have a hidden [[Prototype]] (accessible via __proto__) pointing to another object.

function Demo(name) {
  this.name = name;
}
Demo.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

const d1 = new Demo("Priyanshu");
d1.sayHi(); // Output: Hi Priyanshu


/***********************
 Q3: Explain prototypal inheritance
***********************/
const parent = { greet: function () { console.log("Hi from parent!"); } };
const child = Object.create(parent); // child inherits from parent
child.name = "Priyanshu";

child.greet(); 
// Output: Hi from parent!
// JS didn’t find greet in child → looked into parent → found greet.


/***********************
 Q4: Difference between Object Literals and Constructor Functions
***********************/

// Object Literal → creates a single object
const literalObj = { name: "Priyanshu" };

// Constructor Function → blueprint for many objects
function PersonCF2(name) {
  this.name = name;
}
const p1_cf2 = new PersonCF2("Priyanshu");
const p2_cf2 = new PersonCF2("Vartika");

console.log(literalObj); // only one object
console.log(p1_cf2, p2_cf2);     // multiple objects from blueprint


/***********************
 Q5: How to add and remove properties from an object?
***********************/
const obj = {};
// Add properties
obj.name = "Priyanshu";      // dot notation
obj["age"] = 21;             // bracket notation

console.log(obj); // { name: 'Priyanshu', age: 21 }

// Remove property
delete obj.age;
console.log(obj); // { name: 'Priyanshu' }


/***********************
 Q6: How does Object.create() work internally?
***********************/
const proto2 = { greet: function () { console.log("Hello " + this.name); } };
const person1 = Object.create(proto2); // creates empty object with proto2 as prototype
person1.name = "Priyanshu";

person1.greet(); 
// Output: Hello Priyanshu
// person1 doesn’t have greet → looks in proto2 → found greet.

console.log(person1.hasOwnProperty("greet")); // false (comes from prototype)





/***********************
 Q1: What does Object.create() do?
***********************/
const proto3 = {
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

const person2 = Object.create(proto3); // person2’s prototype is proto3
person2.name = "Priyanshu";

person2.greet();
// ✅ Output: "Hello, Priyanshu"
// Explanation: 'person2' doesn't have greet → JS looks in proto3 → found greet.


/***********************
 Q2: Does Object.create() copy methods into the object?
***********************/
console.log(person2.hasOwnProperty("greet"));
// ❌ false 
// Explanation: greet is not a direct property of person2, 
// it's coming from proto3 via the prototype chain.


/***********************
 Q3: How does the prototype chain look here?
***********************/
// person2 → proto3 → Object.prototype → null
console.log(Object.getPrototypeOf(person2) === proto3); // ✅ true


/***********************
 Q4: How is this different from a constructor function?
***********************/
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hi, " + this.name);
};

const p1 = new Person("Vartika");
p1.greet();
// ✅ Output: "Hi, Vartika"
// Explanation: 'greet' is shared by all Person objects via Person.prototype


/***********************
 Q5: Adding & removing properties dynamically
***********************/
p1.age = 22; // add
console.log(p1.age); // 22

delete p1.age; // remove
console.log(p1.age); // undefined