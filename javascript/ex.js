// function multiplier(arr){
//         return arr.map((num)=>{
//         return function (multi){
//             console.log(num * multi )
//         }
//     })
// }


// function multiplier2(arr){
//     return function (multi){
//         return arr.map((num)=>num*multi)
//     }
// }

// const mul=multiplier([1,2,3,4]);
// mul[0](10);
// mul[2](10);
// mul[1](1230);

// const mul2=multiplier2([1,2,3,4]);
// console.log(mul2(10));


function slow(n){
    // for(let i=0;i<1e7;i++){
    //     for(let j=0;j<10000;j++){}
    // }
    
    console.log(n*n)
}


// function cachefn(fn){
//     const cache={};
//     return function (...args){
//         const key=JSON.stringify(args);
//         if(cache[key]){
//             return cache[key];
//         }else{
//             const result =fn.apply(this,args)
//             cache[key]=result;
//             return result;
//         }
//     }
// }

// const slow2=cachefn(slow);
// console.time("First call");
// console.log(slow2(10)); // Should be slow
// console.timeEnd("First call");

// console.time("Second call");
// console.log(slow2(10)); // Should be fast (cached)
// console.timeEnd("Second call");



// function debounce(fn,delay){
//         let timer;
//         return function(...args){
//             // console.log(timer)
//             clearTimeout(timer)
//             timer=setTimeout(()=>{
//                 fn.apply(this,args);
//             },delay)
//         }
// }

// const debounced=debounce(slow,10000);
// console.time("Second call");
// debounced(10); // Should be slow



// debounced(20); // Should be fast (cached)
// debounced(20); // Should be fast (cached)
// debounced(20); // Should be fast (cached)
// debounced(20); // Should be fast (cached)
// debounced(20); // Should be fast (cached)
// debounced(400); // Should be fast (cached)
// console.timeEnd("Second call");  // 3000ms


// function groupBy(arr,fn){
//     const result={};
//     arr.forEach((num)=>{
//         const key=fn(num);
//         if(!result[key]){
//             result[key]=[];
//             }
//         result[key].push(num);
//     })
//     return result
// }

// const arr=[1.3,3.4,4.5,5,9.8,4.5,]
// const grouped=groupBy(arr,Math.floor)
// console.log(grouped)



// function rotate(k,arr){
//     k=k%arr.length;
//     return arr.slice(arr.length-k,arr.length).concat(arr.slice(0,arr.length-k));
// }
// const rotated=rotate(300,arr)
// console.log(rotated)

// function print(...arr){
//     let result=0;
//     arr.forEach((nums)=>result+=nums)
//     return result
// }

// function print2(...args){
//     return args.reduce((a,b)=>a+b,0)
// }

// console.log(print2(1,2,3,4,5))


const arr=[1,1,2,3,2,2,2,2,4,5,6,4,3,1,2,3,4,7,6,5,4,6,8,7,5,7,8,9]

// function findFreq(arr){
//     const freqMap={};
//     for(let i =0;i<arr.length;i++){
//         let key=arr[i]
//         console.log(key)
//         key=JSON.stringify(arr[i])
//         console.log(key)
//         if(!freqMap[key]){
//             freqMap[key] = 0;  // Initialize to 0 first
//         }
//         freqMap[key]++;
//     }

//     return freqMap;
// }

// console.log(findFreq(arr))

// function chunk(arr,n){
//     const result=[];
//     for(let i=0;i<arr.length;i+=n){
//         result.push(arr.slice(i,i+n))
//     }
//     return result ;
// }

// console.log(chunk(arr,3))

function sumPair(arr,sum){
    const result=[];
    const seen= new Set();
    for(let num of arr){
        if(seen.has(sum-num)){
            result.push([num,sum-num])
        }
        seen.add(num)
    }
    return result;
}

// console.log(sumPair(arr,4))
const arr2=[1,1,2,0,0,0,0,0,3,2,2,2,2,4,5,6,4,3,0,0,0,0,0,1,2,3,4,7,6,5,4,6,0,0,0,0,8,7,5,7,8,9]
function zeros(arr){
    // let nonZero=arr.filter(x=>x!==0)
    // let Zero=arr.filter(x=>x===0)
    // return Zero.concat(nonZero)
    let start=0;
    let end=0;
    while(end<arr.length){
        if(arr[end]===0){
            end++;
        }else{
            [arr[start],arr[end]]=[arr[end],arr[start]]
            start++;
            end++;
        }

    }
    return arr
}

// console.log(zeros(arr2))

function LIS(arr){
    let maxi=0;
    for(let i=0;i<arr.length;i++){
        let current=arr[i];
        let count=1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>current){
                current=arr[j];
                count++
            }
        }
        
        maxi=Math.max(maxi,count)
    }

    return maxi;
}

console.log(LIS(arr2))



