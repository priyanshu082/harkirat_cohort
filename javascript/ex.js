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


// function slow(n){
//     // for(let i=0;i<1e7;i++){
//     //     for(let j=0;j<10000;j++){}
//     // }
    
//     console.log(n*n)
// }


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


// const arr=[1,1,2,3,2,2,2,2,4,5,6,4,3,1,2,3,4,7,6,5,4,6,8,7,5,7,8,9]

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

// function sumPair(arr,sum){
//     const result=[];
//     const seen= new Set();
//     for(let num of arr){
//         if(seen.has(sum-num)){
//             result.push([num,sum-num])
//         }
//         seen.add(num)
//     }
//     return result;
// }

// // console.log(sumPair(arr,4))
// const arr2=[1,1,2,0,0,0,0,0,3,2,2,2,2,4,5,6,4,3,0,0,0,0,0,1,2,3,4,7,6,5,4,6,0,0,0,0,8,7,5,7,8,9]
// function zeros(arr){
//     // let nonZero=arr.filter(x=>x!==0)
//     // let Zero=arr.filter(x=>x===0)
//     // return Zero.concat(nonZero)
//     let start=0;
//     let end=0;
//     while(end<arr.length){
//         if(arr[end]===0){
//             end++;
//         }else{
//             [arr[start],arr[end]]=[arr[end],arr[start]]
//             start++;
//             end++;
//         }

//     }
//     return arr
// }

// // console.log(zeros(arr2))

// function LIS(arr){
//     let maxi=0;
//     for(let i=0;i<arr.length;i++){
//         let current=arr[i];
//         let count=1;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]>current){
//                 current=arr[j];
//                 count++
//             }
//         }
        
//         maxi=Math.max(maxi,count)
//     }

//     return maxi;
// }

// console.log(LIS(arr2))


// let calculator={
//     a:10,
//     b:20,
//     add() {return this.a+this.b},
//     sub() {return this.a-this.b},
// }

// Object.defineProperty(calculator,'age',{
//     value:30,
//     writable:false,
//     enumerable:false,
// })

// console.log(calculator.add)

// const obj= new Object(calculator)
// obj.name="priyanshu"
// obj.age=15
// console.log(Object.getPrototypeOf(obj))

// for(let key in calculator){
//     console.log(key ,calculator[key])
// }

// console.log(Object.keys(calculator))
// console.log(Object.values(calculator))
// console.log(Object.entries(calculator))

// console.log(calculator.add())

// const obj = { name: 'Priyanshu' };
// console.log(Object.getPrototypeOf(obj));

// let calculator={
//     a:10,
//     b:20,
//     add() {return this.a+this.b},
//     sub() {return this.a-this.b},
// }

//create afunction to multiply all numric values by two
// function multiplybytwo(obj){
//     for(key in obj){
//         if(typeof obj[key]==='number'){
//             obj[key]=obj[key]*2
//         }
//     }
// }
// multiplybytwo(calculator)
// console.log(calculator)


// const a={}
// const b={key:"b"}
// const c={key:"c"}


// a[b]=123; // a["[object object]"]=123
// a[c]=456; // a["[object object]"]=456

// console.log(a)

// const obj ={
//     name:"priyanshu",
//     agr:null,
//     address:false,
//     money:0,
//     aks:45
// }
// function removefalsy(obj){
//     const res={}
//     for(let key in obj){
//         if(obj[key]) res[key]=obj[key]
//     }

//     return res
// }

// function maxValue(obj){
//     let maxi=-Infinity
//     let maxKey=null;
//     for(key in obj){
//         if(maxi<obj[key]){
//             maxi=obj[key]
//             maxKey=key
//         }
//     }
//     return {maxKey,maxi}
// }
// const ans=maxValue(obj);
// console.log(ans.maxKey, ":",ans.maxi)

// const arr = [{id:1, name:"A"}, {id:2, name:"B"}]

// function arrayToObject(arr){
//     const res={}
//     for(let i =0;i<arr.length ;i++){
//         res[arr[i].id]=arr[i]
//     }
//     return res
// }

// console.log(arrayToObject(arr));



// const arr=[];
// function deepClone(obj,parent=""){
//     for(key in obj){
//         if(typeof obj[key]==="object" && obj[key]!==null){
//             if(parent==="")deepClone(obj[key],key);
//             else deepClone(obj[key],parent+ "." +key)
//         }else{
//             const toPush = parent ? parent + "." + key : key;
//             arr.push(toPush)
//         }
//     }
// }

// deepClone(obj)

// console.log(arr)

// function intersection(obj1,obj2){
//     const res={}
//     for(key in obj1){
//         if(obj2[key] && obj1[key]===obj2[key]) res[key]=obj1[key]
//     }
//     return res
// }

// const obj2= {a:1, b:{c:2, d:{a:3}}}
    // Output: {b:{c:2, d:{}}}

// function removeProperty(obj,prop){
//     for(key in obj){
//         if(key===prop) delete obj[key]
//         else if( typeof obj[key]==="object" && obj[key]!==null) removeProperty(obj[key],prop)
//     }
// }

// removeProperty(obj2,"a")
// console.log(obj2)

// const obj ={
//         name:"priyanshu",
//         age:null,
//         address:{
//             city:"delhi",
//             state:"up"
//         },
//         degree:{
//             btech:1,
//             mtech:2,
//         },
//         money:0,
//         aks:45
// }



// function nestedToFlat(obj,parent="",res={}){
//     for(key in obj){
//         if(typeof obj[key]==="object" && obj[key]!==null){
//             nestedToFlat(obj[key],parent ? parent+"."+key : key,res);
//         }else{
//             const newKey = parent ? parent + "." + key : key;
//             res[newKey]=obj[key]
//         }
//     }

//     return res
// }

// // console.log(nestedToFlat(obj))

// function Unflatten(obj){
//     const result={}
//     for(key in obj){
//         const newKey = key.split(".");
//         let current = result;
//         for(let i =0;i<newKey.length;i++){
//             if(i==newKey.length-1){
//                 current[newKey[i]]=obj[key]
//             }else{
//                 if(!current[newKey[i]]) current[newKey[i]]={}
//                 current= current[newKey[i]]
//             }    
//         }
//     }

//     return result
// }



// console.log(Unflatten(nestedToFlat(obj)))

// const arr=[{type:"A", val:1}, {type:"B", val:2}, {type:"A", val:3}]
// // console.log()
// function groupByProperty(arr){
//     const res={}
    
//     for(let i =0;i<arr.length;i++){
//         const key=arr[i].type
//         if(!res[key]) res[key]=[]
//         res[key].push(arr[i])
//     }
//        return res
// }

// console.log(groupByProperty(arr))

const obj= {a:1, b:{c:1, d:{e:1}}}
function findAllPaths(obj,value,parent="", res=[],){
    for(key in obj){
        if(typeof obj[key]==="object" && obj[key]!==null){
            findAllPaths(obj[key],value,parent ? parent+"."+key : key,res,value);
        }else{
            const newKey = parent ? parent + "." + key : key;
            if(obj[key]===value) res.push(newKey)
        }
    }

    return res
}

console.log(findAllPaths(obj,1))