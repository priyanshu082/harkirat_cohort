/*
==========================
Everything About Objects in JavaScript
==========================

1. What is an Object?
---------------------
An object is a collection of key-value pairs. Keys are strings (or Symbols), and values can be any type.
Objects are used to store related data and functionality.

Example:
    let person = {
        name: "Alice",
        age: 25,
        isStudent: true
    };

2. Creating Objects
-------------------
- Object literal:
    let obj = { a: 1, b: 2 };
- Using new Object():
    let obj2 = new Object();
    obj2.a = 1;
- Using Object.create():
    let proto = { greet() { console.log("hi"); } };
    let obj3 = Object.create(proto);

3. Accessing and Modifying Properties
-------------------------------------
    let car = { brand: "Toyota", year: 2020 };
    console.log(car.brand); // "Toyota"
    car.year = 2021;
    car["color"] = "red";
    delete car.brand;

4. Nested Objects
-----------------
    let user = {
        name: "Bob",
        address: {
            city: "Delhi",
            pin: 110001
        }
    };
    console.log(user.address.city); // "Delhi"

5. Methods in Objects
---------------------
    let calculator = {
        add: function(a, b) { return a + b; },
        sub(a, b) { return a - b; }
    };
    console.log(calculator.add(2, 3)); // 5

6. The 'this' Keyword
---------------------
- Refers to the object the method was called on.
    let dog = {
        name: "Tommy",
        speak() { console.log("Woof! My name is " + this.name); }
    };
    dog.speak(); // "Woof! My name is Tommy"

7. Iterating Over Object Properties
-----------------------------------
- for...in loop:
    let obj = {x: 1, y: 2};
    for(let key in obj) {
        console.log(key, obj[key]);
    }
- Object.keys(obj): returns array of keys
- Object.values(obj): returns array of values
- Object.entries(obj): returns array of [key, value] pairs

8. Object Destructuring
-----------------------
    let user = {name: "Sam", age: 30};
    let {name, age} = user;
    // name = "Sam", age = 30

9. Spread and Rest with Objects
------------------------------
    let obj1 = {a: 1, b: 2};
    let obj2 = {...obj1, c: 3}; // {a:1, b:2, c:3}
    function print({a, ...rest}) { console.log(a, rest); }

10. Object Methods
------------------
- Object.assign(target, ...sources): Copies properties
- Object.keys(obj): Array of keys
- Object.values(obj): Array of values
- Object.entries(obj): Array of [key, value] pairs
- Object.hasOwnProperty(key): Checks if key exists
- Object.getOwnPropertyNames(obj): All own property names (including non-enumerable)
- Object.getPrototypeOf(obj): Get prototype of object

11. Common & Medium Level Interview Questions (Groww SDE Intern, etc)
---------------------------------------------------------------------

Q1. Count the frequency of each character in a string.
    // Example:
    // Input: "hello"
    // Output: {h:1, e:1, l:2, o:1}
    function charFrequency(str) {
        let freq = {};
        for(let ch of str) {
            freq[ch] = (freq[ch] || 0) + 1;
        }
        return freq;
    }

Q2. Invert keys and values of an object.
    // Example:
    // Input: {a:1, b:2, c:3}
    // Output: {1:"a", 2:"b", 3:"c"}
    function invert(obj) {
        let res = {};
        for(let key in obj) {
            res[obj[key]] = key;
        }
        return res;
    }

Q3. Merge two objects.
    // Example:
    // Input: {a:1, b:2}, {b:3, c:4}
    // Output: {a:1, b:3, c:4}
    function mergeObjects(obj1, obj2) {
        return {...obj1, ...obj2};
    }

Q4. Remove properties with falsy values.
    // Example:
    // Input: {a:1, b:0, c:false, d:"hi"}
    // Output: {a:1, d:"hi"}
    function removeFalsy(obj) {
        let res = {};
        for(let key in obj) {
            if(obj[key]) res[key] = obj[key];
        }
        return res;
    }

Q5. Check if two objects are equal (shallow).
    // Example:
    // Input: {a:1, b:2}, {b:2, a:1}
    // Output: true
    function shallowEqual(obj1, obj2) {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
        if(keys1.length !== keys2.length) return false;
        for(let key of keys1) {
            if(obj1[key] !== obj2[key]) return false;
        }
        return true;
    }

Q6. Find the property with the maximum value.
    // Example:
    // Input: {a:10, b:20, c:5}
    // Output: "b"
    function maxProperty(obj) {
        let maxKey = null, maxVal = -Infinity;
        for(let key in obj) {
            if(obj[key] > maxVal) {
                maxVal = obj[key];
                maxKey = key;
            }
        }
        return maxKey;
    }

Q7. Convert an array of objects to a single object by a key.
    // Example:
    // Input: [{id:1, name:"A"}, {id:2, name:"B"}]
    // Output: {1: {id:1, name:"A"}, 2: {id:2, name:"B"}}
    function arrayToObject(arr, key) {
        return arr.reduce((acc, obj) => {
            acc[obj[key]] = obj;
            return acc;
        }, {});
    }

Q8. Deep clone an object (no functions, no circular refs).
    // Example:
    // Input: {a:1, b:{c:2}}
    // Output: {a:1, b:{c:2}} (different reference)
    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

Q9. Get all keys in an object, including nested (dot notation).
    // Example:
    // Input: {a:1, b:{c:2, d:3}}
    // Output: ["a", "b.c", "b.d"]
    function getAllKeys(obj, prefix = "") {
        let keys = [];
        for(let key in obj) {
            let fullKey = prefix ? prefix + "." + key : key;
            if(typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
                keys = keys.concat(getAllKeys(obj[key], fullKey));
            } else {
                keys.push(fullKey);
            }
        }
        return keys;
    }

Q10. Freeze an object (make it immutable).
    // Example:
    // Input: {a:1, b:2}
    // Output: Object is frozen, cannot modify properties
    function freezeObject(obj) {
        Object.freeze(obj);
        // For deep freeze:
        for(let key in obj) {
            if(typeof obj[key] === "object" && obj[key] !== null) {
                freezeObject(obj[key]);
            }
        }
        return obj;
    }

Q11. Find the intersection of two objects (keys present in both, with same values).
    // Example:
    // Input: {a:1, b:2, c:3}, {a:1, b:4, d:3}
    // Output: {a:1}
    function objectIntersection(obj1, obj2) {
        let res = {};
        for(let key in obj1) {
            if(obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
                res[key] = obj1[key];
            }
        }
        return res;
    }

Q12. Remove a property from an object deeply (all nested levels).
    // Example:
    // Input: {a:1, b:{c:2, d:{a:3}}}, key: "a"
    // Output: {b:{c:2, d:{}}}
    function removeKeyDeep(obj, keyToRemove) {
        if (Array.isArray(obj)) {
            return obj.map(item => removeKeyDeep(item, keyToRemove));
        } else if (typeof obj === "object" && obj !== null) {
            let res = {};
            for (let key in obj) {
                if (key !== keyToRemove) {
                    res[key] = removeKeyDeep(obj[key], keyToRemove);
                }
            }
            return res;
        }
        return obj;
    }

Q13. Flatten a nested object (dot notation).
    // Example:
    // Input: {a:1, b:{c:2, d:{e:3}}}
    // Output: {a:1, "b.c":2, "b.d.e":3}
    function flattenObject(obj, prefix = "", res = {}) {
        for (let key in obj) {
            let newKey = prefix ? prefix + "." + key : key;
            if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
                flattenObject(obj[key], newKey, res);
            } else {
                res[newKey] = obj[key];
            }
        }
        return res;
    }

Q14. Unflatten an object (from dot notation).
    // Example:
    // Input: {"a":1, "b.c":2, "b.d.e":3}
    // Output: {a:1, b:{c:2, d:{e:3}}}
    function unflattenObject(obj) {
        let res = {};
        for (let key in obj) {
            let parts = key.split(".");
            let curr = res;
            for (let i = 0; i < parts.length; i++) {
                if (i === parts.length - 1) {
                    curr[parts[i]] = obj[key];
                } else {
                    if (!curr[parts[i]]) curr[parts[i]] = {};
                    curr = curr[parts[i]];
                }
            }
        }
        return res;
    }

Q15. Group array of objects by a property.
    // Example:
    // Input: [{type:"A", val:1}, {type:"B", val:2}, {type:"A", val:3}]
    // Output: {A: [{type:"A", val:1}, {type:"A", val:3}], B: [{type:"B", val:2}]}
    function groupBy(arr, key) {
        return arr.reduce((acc, obj) => {
            let group = obj[key];
            if (!acc[group]) acc[group] = [];
            acc[group].push(obj);
            return acc;
        }, {});
    }

Q16. Check if an object is a plain object (not array, not null, not function).
    function isPlainObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    }

Q17. Find all paths to a value in a nested object.
    // Example:
    // Input: {a:1, b:{c:1, d:{e:1}}}, value: 1
    // Output: ["a", "b.c", "b.d.e"]
    function findAllPaths(obj, value, prefix = "") {
        let paths = [];
        for (let key in obj) {
            let fullKey = prefix ? prefix + "." + key : key;
            if (typeof obj[key] === "object" && obj[key] !== null) {
                paths = paths.concat(findAllPaths(obj[key], value, fullKey));
            } else if (obj[key] === value) {
                paths.push(fullKey);
            }
        }
        return paths;
    }

Q18. Implement a simple LRU cache using objects.
    // (For interview, you can use Map for O(1) order, but here's a simple version)
    function LRUCache(capacity) {
        this.cache = {};
        this.order = [];
        this.capacity = capacity;
    }
    LRUCache.prototype.get = function(key) {
        if (this.cache.hasOwnProperty(key)) {
            // Move to end (most recently used)
            this.order = this.order.filter(k => k !== key);
            this.order.push(key);
            return this.cache[key];
        }
        return -1;
    }
    LRUCache.prototype.put = function(key, value) {
        if (this.cache.hasOwnProperty(key)) {
            this.order = this.order.filter(k => k !== key);
        } else if (this.order.length === this.capacity) {
            let oldest = this.order.shift();
            delete this.cache[oldest];
        }
        this.cache[key] = value;
        this.order.push(key);
    }

Q19. Implement a function to deeply compare two objects (deep equality).
    function deepEqual(a, b) {
        if (a === b) return true;
        if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
        let keysA = Object.keys(a), keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }
        return true;
    }

Q20. Implement a function to get the prototype chain of an object as an array.
    function getPrototypeChain(obj) {
        let chain = [];
        let proto = Object.getPrototypeOf(obj);
        while (proto) {
            chain.push(proto);
            proto = Object.getPrototypeOf(proto);
        }
        return chain;
    }

==========================
Tips:
- Practice using all object methods and understand property descriptors (Object.defineProperty, writable, enumerable, configurable).
- Know the difference between shallow and deep copy.
- Understand prototype chain and inheritance (constructor, __proto__, prototype).
- Be comfortable with destructuring and spread/rest for objects.
- Practice Leetcode/EPI/InterviewBit object-related questions for mastery.
- Know about ES6+ features: Object.entries, Object.fromEntries, Object.values, Symbol, etc.
- Understand immutability and how to freeze/seal/preventExtensions on objects.
- Be able to explain how for...in, Object.keys, and hasOwnProperty differ.
- Know how to handle edge cases: arrays as objects, null, functions as properties, etc.

==========================
*/
