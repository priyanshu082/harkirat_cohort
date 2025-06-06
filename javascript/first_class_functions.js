//1.function statement

function a(){}
//this way of creating the function is called function statement
//it is not hoisted
//it is not called until it is invoked
//it is not a variable  
//it is a statement



//2.function expression
var a = function(){}
//this way of creating the function is called function expression
//it is hoisted
//it is called when it is invoked
//it is a variable



//3.anonymous functions
// function (){}
//this way of creating the function is called anonymous function
//it is not hoisted
//its a syntax error
//Q.where it is used?
//A. it is used when we need to pass a function as an argument to another function
//it is used when we need to return a function from a function
//example
function a(){
    return function(){}
}

var b =function (){}
//in this example a is a function and it returns an anonymous function



//4.named functions expression
var a = function b(){}
//this way of creating the function is called named function expression
//it is hoisted
//here b() will not be recognised


//5.difference between parameters and arguments
//parameters are the variables that are declared in the function definition
//arguments are the values that are passed to the function when it is invoked
//examples
function a(x,y){
    console.log(x);
    console.log(y);
    }
    a(10,20);
    //here x and y are parameters
    //10 and 20 are arguments


//6.first class functions
//ability to be used like values
//functions are first class citizens in javascript
//example
var a = function(){}
var b = a;
//here a and b are referencing the same function
//example
function a(){
    return function(){}
}
var b = a();
//here b is referencing the function that is returned by a 



//7.arrow functions
//they are a shorthand for writing functions
//they are used when we need to return a value
//example
var a = function(x,y){
    return x+y;
}
var b = (x,y) =>{
    x+y
}
//here a and b are doing the same thing





