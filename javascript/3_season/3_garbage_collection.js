
/*
  Garbage Collection in JavaScript (JS)

  JavaScript automatically manages memory through garbage collection (GC). 
  This means that objects, arrays, functions, etc., that are no longer reachable 
  from your code are automatically cleaned up to free memory.

  How it works:
  1. Memory Allocation:
     - When we create variables or objects, JS allocates memory for them on the heap.
  
  2. Memory Deallocation:
     - When objects are no longer needed (i.e., unreachable), JS automatically removes them from memory.

  3. Reachability:
     - An object is considered "reachable" if it can be accessed from roots:
       * Global variables
       * Local variables in currently executing functions
       * References from other reachable objects
     - Objects that are unreachable are eligible for garbage collection.

  4. Garbage Collection Techniques:
     a) Mark-and-Sweep (most common):
        - JS engine starts from roots, marks all reachable objects.
        - Unmarked (unreachable) objects are "swept" and memory is freed.
     b) Reference Counting (less common):
        - Each object keeps track of references pointing to it.
        - If reference count = 0 → object can be collected.
        - Problem: circular references can cause memory leaks if only reference counting is used.
*/

// ------------------------- Example 1: Basic GC -------------------------

// Step 1: Memory allocation
let person = { name: "Priyanshu", age: 21 }; // object allocated in memory
let anotherPerson = person;                  // another reference to same object

console.log(person, anotherPerson); // Both references exist

// Step 2: Removing one reference
person = null; // Original reference removed
// Object is still reachable via anotherPerson, so it is NOT garbage collected
console.log(anotherPerson); // { name: "Priyanshu", age: 21 }

// Step 3: Removing all references
anotherPerson = null;
// Now the object has no references → unreachable → eligible for garbage collection
// JS engine will automatically clean it up at some point

// ------------------------- Example 2: Circular References -------------------------

let objA = {};
let objB = {};

objA.ref = objB;
objB.ref = objA;

// Removing root references
objA = null;
objB = null;

// Even though objA and objB reference each other, they are now unreachable from roots
// Mark-and-sweep garbage collector will free this memory
// Reference counting alone would have failed here, causing a memory leak

/*
  Key Takeaways:
  1. JS automatically handles memory cleanup.
  2. Objects become eligible for GC when they are unreachable.
  3. Circular references are handled safely by mark-and-sweep.
  4. Developers should nullify unused references and avoid unnecessary globals to help GC.
*/
