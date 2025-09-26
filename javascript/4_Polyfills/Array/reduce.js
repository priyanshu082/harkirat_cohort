if(!Array.prototype.reduce){
    Array.prototype.reduce=function (callback, initialvalue){
        let acc=initialvalue;
        let startindex=0;
        const arr=this;
        const n=arr.length;
        if(acc===undefined){
            if(arr.length===0){
                throw new TypeError("Reduce of empty array with no initial value")
            }
            acc=arr[0];
            startindex=1;
        }
        
        for(let i=startindex;i<n;i++){
            acc=callback(acc,arr[i],i,arr);
        }
        return acc;
    }
}