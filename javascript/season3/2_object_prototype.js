/***********************
 Q1: What does Object.create() do?
***********************/
const proto = {
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

const person = Object.create(proto); // person’s prototype is proto
person.name = "Priyanshu";

person.greet();
// ✅ Output: "Hello, Priyanshu"
// Explanation: 'person' doesn't have greet → JS looks in proto → found greet.


/***********************
 Q2: Does Object.create() copy methods into the object?
***********************/
console.log(person.hasOwnProperty("greet"));
// ❌ false 
// Explanation: greet is not a direct property of person, 
// it's coming from proto via the prototype chain.


/***********************
 Q3: How does the prototype chain look here?
***********************/
// person → proto → Object.prototype → null
console.log(Object.getPrototypeOf(person) === proto); // ✅ true


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