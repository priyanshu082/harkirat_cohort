const x:number=32;
console.log(x)

function sum(a:number ,b:number ):number {
    return a+b;
}

console.log(sum(4,2))


function runAfter2s(fn:Function){
    return setTimeout(fn,2000)
}

function y() {
  console.log('hello')
}


runAfter2s(y)

