/*
    Closures in JavaScript

    Definition:
    -----------
    A closure is a function that "remembers" the variables from its lexical scope even when the function is executed outside that scope. In other words, a closure gives you access to an outer function’s scope from an inner function, even after the outer function has finished executing.

    Basic Example:
    --------------
*/
function outerFunction() {
    let outerVar = "I am from outer scope";
    function innerFunction() {
        console.log(outerVar); // innerFunction "closes over" outerVar
    }
    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I am from outer scope

/*
    Another Example: Counter using Closure
    -------------------------------------
*/
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/*
    Closure Questions and Solutions
    ------------------------------
*/

/*
1. What is a closure in JavaScript? Write a simple example to demonstrate closure.
*/
function closureExample() {
    let secret = "I'm a closure!";
    return function() {
        return secret;
    }
}
const getSecret = closureExample();
console.log(getSecret()); // "I'm a closure!"

/*
2. What will the following code output and why?
   function makeCounter() {
       let count = 0;
       return function() {
           count++;
           return count;
       }
   }
   const counter1 = makeCounter();
   const counter2 = makeCounter();
   console.log(counter1()); // ?
   console.log(counter1()); // ?
   console.log(counter2()); // ?
   
   Solution:
   Each call to makeCounter() creates a new closure with its own count variable.
   So:
   counter1() -> 1
   counter1() -> 2
   counter2() -> 1
*/
function makeCounterQ2() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter1 = makeCounterQ2();
const counter2 = makeCounterQ2();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1

/*
3. How does caching with closures help performance? Give a real-world scenario.

   Solution:
   Caching with closures allows you to store expensive computation results so that repeated calls with the same arguments return instantly. For example, memoizing API responses or computationally expensive math functions.
*/

/*
4. Create a function `once` that takes a function as an argument and returns a new function that can only be called once. 
   On the first call, it returns the result of the original function. On subsequent calls, it returns undefined.

   Example:
       function add(a, b) { return a + b; }
       const addOnce = once(add);
       console.log(addOnce(2, 3)); // 5
       console.log(addOnce(4, 5)); // undefined
*/
function once(fn) {
    let called = false;
    let result;
    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
            return result;
        }
        return undefined;
    }
}
function add(a, b) { return a + b; }
const addOnce = once(add);
console.log(addOnce(2, 3)); // 5
console.log(addOnce(4, 5)); // undefined

/*
5. Write a function `createMultipliers` that takes an array of numbers and returns an array of functions.
   Each function, when called, should return the product of its corresponding number and a given multiplier.

   Example:
       const multipliers = createMultipliers([1, 2, 3]);
       console.log(multipliers[0](10)); // 10
       console.log(multipliers[1](10)); // 20
       console.log(multipliers[2](10)); // 30
*/
function createMultipliers(arr) {
    return arr.map(function(num) {
        return function(multiplier) {
            return num * multiplier;
        }
    });
}
const multipliers = createMultipliers([1, 2, 3]);
console.log(multipliers[0](10)); // 10
console.log(multipliers[1](10)); // 20
console.log(multipliers[2](10)); // 30

/*
6. Implement a function `cacheFunction` that takes a function as input and returns a new function.
   The new function caches the results for each set of arguments and returns the cached result when called with the same arguments.

   Example:
       function slowSquare(n) { 
           // Simulate slow computation
           for(let i=0;i<1e7;i++){}
           return n * n; 
       }
       const cachedSquare = cacheFunction(slowSquare);
       console.log(cachedSquare(5)); // computes and returns 25
       console.log(cachedSquare(5)); // returns cached 25 instantly
*/
function cacheFunction(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        } else {
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    }
}


function slowSquare(n) { 
    for(let i=0;i<1e7;i++){}
    return n * n; 
}
const cachedSquare = cacheFunction(slowSquare);
console.log(cachedSquare(5)); // computes and returns 25
console.log(cachedSquare(5)); // returns cached 25 instantly

/*
7. Write a function `makeAdder(x)` that returns a function which adds `x` to its argument.

   Example:
       const add5 = makeAdder(5);
       console.log(add5(10)); // 15
       console.log(add5(20)); // 25
*/
function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}
const add5 = makeAdder(5);
console.log(add5(10)); // 15
console.log(add5(20)); // 25

/*
8. Write a function `debounce(fn, delay)` that returns a debounced version of `fn`. The debounced function should only call `fn` after it has not been called for `delay` milliseconds.
*/
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}
let count = 0;
const debounced = debounce(() => { count++; console.log("Debounced", count); }, 100);
debounced();
debounced();
debounced(); // Only one "Debounced 1" after 100ms

/*
9. Write a function `groupBy(arr, fn)` that groups elements of `arr` by the result of calling `fn` on each element. Use closures to maintain the grouping.
*/
function groupBy(arr, fn) {
    return arr.reduce((groups, item) => {
        const key = fn(item);
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
        return groups;
    }, {});
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }

/*
10. Write a function `multiStepCounter(steps)` that returns an array of functions. Each function, when called, should increment and return its own counter, but all counters should share a global total count (using closure).
*/
function multiStepCounter(steps) {
    let total = 0;
    return steps.map(() => {
        let count = 0;
        return function() {
            count++;
            total++;
            return { count, total };
        }
    });
}
const counters = multiStepCounter([1,2,3]);
console.log(counters[0]()); // { count: 1, total: 1 }
console.log(counters[1]()); // { count: 1, total: 2 }
console.log(counters[0]()); // { count: 2, total: 3 }

/*
11. Write a function `memoize(fn, resolver)` that memoizes the result of `fn`. The resolver is a function that computes the cache key from the arguments. Use closure to store the cache.
*/
function memoize(fn, resolver) {
    const cache = new Map();
    return function(...args) {
        const key = resolver ? resolver(...args) : args[0];
        if (cache.has(key)) return cache.get(key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}
const memoizedAdd = memoize((a, b) => a + b, (a, b) => `${a},${b}`);
console.log(memoizedAdd(1,2)); // 3
console.log(memoizedAdd(1,2)); // 3 (cached)

/*
12. Write a function `createEventEmitter()` that returns an object with `on`, `off`, and `emit` methods, using closures to store event listeners.
*/
function createEventEmitter() {
    const events = {};
    return {
        on(event, listener) {
            if (!events[event]) events[event] = [];
            events[event].push(listener);
        },
        off(event, listener) {
            if (!events[event]) return;
            events[event] = events[event].filter(l => l !== listener);
        },
        emit(event, ...args) {
            if (!events[event]) return;
            events[event].forEach(listener => listener(...args));
        }
    }
}
const emitter = createEventEmitter();
function handler(msg) { console.log("Event:", msg); }
emitter.on("test", handler);
emitter.emit("test", "Hello!"); // Event: Hello!
emitter.off("test", handler);
emitter.emit("test", "World!"); // (no output)

/*
13. Write a function `withTimeout(fn, ms)` that returns a function which, when called, will only execute `fn` if it is called within `ms` milliseconds of its creation. After that, it does nothing.
*/
function withTimeout(fn, ms) {
    const created = Date.now();
    return function(...args) {
        if (Date.now() - created <= ms) {
            return fn.apply(this, args);
        }
    }
}
const quick = withTimeout(() => "done", 1000);
console.log(quick()); // "done"
setTimeout(() => console.log(quick()), 1500); // undefined

/*
14. Write a function `makeSecretHolder(secret)` that returns an object with `getSecret` and `setSecret` methods, both using closure to access the private secret.
*/
function makeSecretHolder(secret) {
    let _secret = secret;
    return {
        getSecret() { return _secret; },
        setSecret(s) { _secret = s; }
    }
}
const sh = makeSecretHolder(42);
console.log(sh.getSecret()); // 42
sh.setSecret(99);
console.log(sh.getSecret()); // 99

/*
15. Write a function `createPipeline(functions)` that returns a function which, when called with a value, pipes it through all the functions in the array, using closure to store the pipeline.
*/
function createPipeline(functions) {
    return function(value) {
        return functions.reduce((acc, fn) => fn(acc), value);
    }
}
const pipeline = createPipeline([x => x + 1, x => x * 2]);
console.log(pipeline(3)); // 8

/*
16. Write a function `oncePerKey(fn)` that returns a function which, when called with a key and arguments, will only call `fn` once per unique key, returning the cached result for that key on subsequent calls.
*/
function oncePerKey(fn) {
    const cache = new Map();
    return function(key, ...args) {
        if (cache.has(key)) return cache.get(key);
        const result = fn.apply(this, [key, ...args]);
        cache.set(key, result);
        return result;
    }
}
const greetOnce = oncePerKey((name) => `Hello, ${name}!`);
console.log(greetOnce("Alice")); // Hello, Alice!
console.log(greetOnce("Alice")); // Hello, Alice! (cached)
console.log(greetOnce("Bob"));   // Hello, Bob!

/*
17. Write a function `makeObservable(target)` that returns a proxy for the target object, and allows registering observers that are notified on property changes. Use closure to store the observers.
*/
function makeObservable(target) {
    const observers = [];
    const proxy = new Proxy(target, {
        set(obj, prop, value) {
            obj[prop] = value;
            observers.forEach(fn => fn(prop, value));
            return true;
        }
    });
    proxy.observe = function(fn) {
        observers.push(fn);
    }
    return proxy;
}
const user = makeObservable({name: "John"});
user.observe((key, value) => {
    console.log(`Property ${key} set to ${value}`);
});
user.name = "Alice"; // Property name set to Alice
