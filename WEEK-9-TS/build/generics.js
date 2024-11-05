"use strict";
function firstEl(arr) {
    return arr[0];
}
const value = firstEl(["priyanshu", "singh"]);
//console.log(value.toUpperCase()) 
// there is the issue even though the out put is string we can not perform string operation on value , typescript is refering value to be still arrInput type
// so we need to use type casting to tell typescript that value is actually string
console.log(value.toUpperCase());
// and another way 
function identity(arg) {
    return arg;
}
let output1 = identity("String");
let output2 = identity(133232);
console.log(output1.toUpperCase());
function firstEl2(arr) {
    return arr[0];
}
const value2 = firstEl2(["priyanshu", "singh"]);
console.log(value2.toUpperCase());
