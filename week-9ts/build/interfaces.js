"use strict";
//how will you assing object a type
//there we use interfaces
const isLegal = (user) => {
    if (user.age > 18)
        return true;
    else
        return false;
};
const greet = (user) => {
    console.log("hi there " + user.firstname);
};
console.log(isLegal({
    firstname: "priyanshu",
    lastname: "singh",
    age: 24
}));
greet({
    firstname: "priyanshu",
    lastname: "singh",
    age: 24
});
