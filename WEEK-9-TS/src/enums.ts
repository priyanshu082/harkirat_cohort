
//suppose you want specific type of key press and work accordingly 
//this is also one way of doing this 
type KeyInput= "up"|"down"|"left"|"right"

//but we can use enums which is more humans readable
enum direction{
    up, //0
    down, //1
    left, //2
    right //3
    //we can also change there values 
    // like
    // up="up",
    // down="down",
    // left="left",
    // right="right"
}
function doSomething(key:direction){
    console.log(key)
}

// doSomething("hell") this will not work
doSomething(direction.up)
doSomething(direction.down)
doSomething(direction.left)

//genrally used in fixing status code 
enum statusCode{
    SUCCESS=200,
    NOTFOUND=401,
    ERROR=500
}