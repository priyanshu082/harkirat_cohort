Function.prototype.myApply = function (context, args = []) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

function sum(a, b) { return this.x + a + b; }
console.log(sum.myApply({ x: 5 }, [2, 3])); 