"use strict";
//but we can use enums which is more humans readable
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
function doSomething(key) {
    console.log(key);
}
// doSomething("hell") this will not work
doSomething(direction.up);
doSomething(direction.down);
doSomething(direction.left);
