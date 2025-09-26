Function.prototype.myBind=function (context , ...args1){
    const fn= this;
    return function(...args2){
        return fn.apply(context, [...args1,...args2])
    }
}

function intro(age){ return this.name + " is " + age} ;
const bound= intro.myBind({name:"Priyanshu Singh"});
console.log(bound(22));