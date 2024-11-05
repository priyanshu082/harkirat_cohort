"use strict";
//first enrty is for key and second is for value
const exampleRecord = {
    "1": { name: "John", age: 30 },
    "2": { name: "Jane", age: 25 },
    "4": { name: "Bob", age: 40 }
};
// for(let user in exampleRecord){
//     console.log(user)
// }
//there is map
const usersss = new Map();
usersss.set("1", { name: "priyanshu", age: 30 });
usersss.set("2", { name: "sobvud", age: 3420 });
usersss.set("4", { name: "asdfsd", age: 2430 });
console.log(usersss.get("1"));
function handleEvent(event) {
    console.log(event);
}
handleEvent("click");
// handleEvent("scroll")  cant use this now
