type arrInput=number[] | string[]
function firstEl(arr:arrInput){
    return arr[0];
}


const value=firstEl(["priyanshu","singh"])
//console.log(value.toUpperCase()) 
// there is the issue even though the out put is string we can not perform string operation on value , typescript is refering value to be still arrInput type

// so we need to use type casting to tell typescript that value is actually string
console.log((value as string).toUpperCase())

// and another way 
function identity<T>(arg:T){
    return arg
}

let output1= identity<string>("String")
let output2= identity<number>(133232)


console.log(output1.toUpperCase())

function firstEl2<T>(arr:T[]):T{
    return arr[0];
}


const value2=firstEl2(["priyanshu","singh"])
console.log(value2.toUpperCase())