if(!Array.prototype.filter){
    Array.prototype.myFilter= function(callback){
        const result=[];
        for(let i=0;i<this.length;i++){
            if(callback(this[i],i,this)) result.push(this[i],i, this);
        }
        return result;
    }
}

console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0)); 