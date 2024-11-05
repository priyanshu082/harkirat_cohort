"use strict";
const x = 32;
console.log(x);
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 2));
function runAfter2s(fn) {
    return setTimeout(fn, 2000);
}
function y() {
    console.log('hello');
}
runAfter2s(y);
