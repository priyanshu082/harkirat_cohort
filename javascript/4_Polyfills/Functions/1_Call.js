Function.prototype.myCall=function (context,...args){
    context=context || globalThis
    const fnSymbol=Symbol();
    context[fnSymbol]=this;
    const result=context[fnSymbol](...args);
    delete context[fnSymbol]
    return result
}


function greet(msg) { return msg + " " + this.name; }
console.log(greet.myCall({ name: "Priyanshu" }, "Hello"));