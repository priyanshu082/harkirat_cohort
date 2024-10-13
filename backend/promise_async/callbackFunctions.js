function sq(n){
    return n * n;
}

function cube(n){
return n*n*n;
}

function sumOfSq(a,b){
    const val1=sq(a); //calling one fucntion inside another fucntion
    const val2=sq(b);
    return val1+val2;
}

function sumOfCube(a,b){
    const val1=cube(a); //calling one fucntion inside another fucntion
    const val2=cube(b);
    return val1+val2;
}

console.log(sumOfSq(4,5));
console.log(sumOfCube(4,5));

//in the above section we are voilating DRY in which we are repeating the code

function sumOfSomething(a,b,fn){
    console.log(fn)
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}

function sumOfSomething(a,b,fn){
    console.log(fn)
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}



console.log(sumOfSomething(4,5,sq))
console.log(sumOfSomething(4,5,function cube(n){return n*n*n;})) //this is called call back fucntion in which we are passing the fucntional arguments 