function maxNum (arr:number[]){
    let max=0;
    for(let i=0;i<arr.length;i++) if(arr[i]>max) max=arr[i]
    return max;
}

const num:number[]=[1,2,3,4,5,6,7]

console.log(maxNum(num))