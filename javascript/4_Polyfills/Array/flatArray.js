function flatArray(arr,result=[]){
    for(let item of arr){
        if( Array.isArray(item)) flatArray(item,result)
        else result.push(item)
    }
  return result
}

function flatArray2(arr){
    let result=[];
    for(let item of arr){
        if( Array.isArray(item)) result = result.concat(flatArray(item));
        else result.push(item)
    }
  return result
}

const arr=[1,2,[3,[4,5,[521,5,4,2,4,5]]]]
const ans=flatArray(arr);
const ans2=flatArray2(arr);
console.log(ans) 
console.log(ans2) 