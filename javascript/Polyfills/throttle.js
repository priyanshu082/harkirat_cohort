function throttle(fn, t){
    let last=0;
    return function(){
        const now=Date.now();
        if(now-last > t){
            fn.apply(this,args);
        }
    }
}