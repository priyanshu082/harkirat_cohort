if(!Array.prototype.map){
    Array.prototype.myMap=function (callback) {
        const result =[];
        const arr = this;
        const n=arr.length;
        for(let i=0;i<n;i++){
             result.push(callback(arr[i],i,arr));
        }
        return result;
    } 
}

console.log([1, 2, 3].myMap(x => x * 2));