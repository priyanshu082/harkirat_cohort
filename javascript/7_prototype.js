// ===================== Prototype & Inheritance in JS =====================

// --------------------- 1. Prototype kya hai ---------------------
// Har function ke sath ek "prototype" object hota hai.
// Usme methods/properties rakhe ja sakte hain jo sab instances ko milte hain.

function Person(name) {
    this.name = name;
  }
  
  // Person ke prototype me ek method add kiya
  Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
  
  let p1 = new Person("Priyanshu");
  p1.sayHello(); // "Hello, my name is Priyanshu"
  
  // p1 ka __proto__ Person.prototype ko point karega
  console.log(p1.__proto__ === Person.prototype); // true
  // Person.prototype ka __proto__ Object.prototype ko point karta hai
  console.log(Person.prototype.__proto__ === Object.prototype); // true
  // Prototype chain ka end null hota hai
  console.log(Object.prototype.__proto__); // null
  
  
  
  // --------------------- 2. Prototype Chain ---------------------
  // Agar koi property object me nahi milegi to JS __proto__ chain follow karega
  // Example: arr.length JS arr me dhundhega, nahi mila to Array.prototype me dekhega
  
  let arr = [1, 2, 3];
  console.log(arr.length); // 3 (mil gaya Array.prototype me)
  
  console.log(arr.__proto__ === Array.prototype); // true
  console.log(Array.prototype.__proto__ === Object.prototype); // true
  
  
  
  // --------------------- 3. __proto__ ---------------------
  // __proto__ ek hidden reference hota hai jo parent prototype ko point karta hai
  
  function Car(model) {
    this.model = model;
  }
  let c1 = new Car("BMW");
  
  console.log(c1.__proto__ === Car.prototype); // true
  console.log("helllll" + c1.__proto__ ); // true
  console.log("5"+Car.prototype); // true
  
  
  
  // --------------------- 4. Object.create ---------------------
  // Object.create ek naya object banata hai jiska prototype hum manually set kar sakte hain
  
  let animal = {
    eats: true,
    walk() {
      console.log("Animal walks");
    }
  };
  
  let rabbit = Object.create(animal); // rabbit ka prototype = animal
  rabbit.jump = true;
  
  console.log(rabbit.eats); // true (inherit from animal)
  rabbit.walk();            // "Animal walks"
  console.log(rabbit.jump); // true (own property)
  
  
  
  // --------------------- 5. Inheritance Example ---------------------
  // Function-based inheritance (ES5 style)
  
  // ===================== Inheritance Example with Detailed Comments =====================

  // 1. Animal constructor function banayi gayi hai, jo har animal ka naam set karegi
  function Animal(name) {
    this.name = name; // har object pe 'name' property set ho jayegi
  }

  // 2. Animal ke prototype pe ek method 'speak' add kiya hai
  //    Taaki jitne bhi Animal ke objects banenge, un sabko ye method mil jaye (memory efficient)
  Animal.prototype.speak = function () {
    console.log(this.name + " makes a noise");
  };

  // 3. Dog constructor function banayi gayi hai, jo Animal se inherit karegi
  function Dog(name) {
    // Animal constructor ko call kiya, taki Dog ka object bhi 'name' property inherit kar le
    // 'this' Dog ke naye object ko refer karega
    Animal.call(this, name); // super constructor call (inheritance ka pehla step)
  }

  // 4. Dog.prototype ko Animal.prototype se inherit karaya
  //    Isse Dog ke sare objects ko Animal ke prototype wale methods mil jayenge (jaise speak)
  Dog.prototype = Object.create(Animal.prototype);

  // 5. Upar wali line se Dog.prototype ka constructor Animal ho gaya tha, isliye wapas Dog pe point kar diya
  //    Taaki instanceof ya constructor check sahi kaam kare
  Dog.prototype.constructor = Dog;

  // 6. Dog ke prototype pe speak method ko override kar diya
  //    Ab Dog ke objects jab speak() call karenge, to ye wala method chalega (naya behavior)
  Dog.prototype.speak = function () {
    console.log(this.name + " barks");
  };

  // 7. Ab ek Dog ka object banate hain
  let d = new Dog("Sheru");

  // 8. d.speak() call karne par Dog ka overridden speak method chalega
  d.speak(); // Output: "Sheru barks"

  // 9. Prototype chain ko check karte hain:
  //    d.__proto__ Dog.prototype ko point karega
  console.log(d.__proto__ === Dog.prototype); // true

  //    Dog.prototype ka prototype Animal.prototype hai (inheritance chain)
  console.log(Dog.prototype.__proto__ === Animal.prototype); // true

  //    Animal.prototype ka prototype Object.prototype hai (sab objects ka base)
  console.log(Animal.prototype.__proto__ === Object.prototype); // true

  // ===================== End of Detailed Explanation =====================