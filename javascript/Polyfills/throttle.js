function throttle(fn, t){
    let last=0;
    return function(...args){
        const now=Date.now();
        if(now-last > t){
            fn.apply(this,args);
            last = now 
        }
    }
}