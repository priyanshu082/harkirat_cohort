"use strict";
function sumOfAge(a, b) {
    return a.age + b.age;
}
const ageSum = sumOfAge({ name: "priyanshu", age: 34 }, { name: "hello", age: 21 });
console.log(ageSum);
