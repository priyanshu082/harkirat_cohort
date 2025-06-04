let p="spdfiM"
// console.log(p.split("d"))
// expected output: [ 'spfiM', 'spfiM' ]

// arr=[1,2,3,4,5,6]

// function reverseArray(arr){
//     let size=arr.length;
//     let left=0
//     let right=size-1
//     while(left<right){
//         [arr[left],arr[right]]=[arr[right],arr[left]]
//         left++
//         right--
//     }

//     return arr
// }

// console.log(reverseArray(arr))

// //implementing .map using foreach 
// let numbers=[1,2,3,4,5]
// function myMap(arr,callback){
//     let result=[]
//     arr.forEach((element,idx) => {
//         result.push(callback(element))
//     });

//     return result
// }

// function sq(x){
//     return x*x;
// }

// const result=myMap(numbers,sq)
// console.log(result)


// const arr=[1, [2,3], 4, [5,6]]

// function flatten(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result.push(...flatten(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }

//     return result
// }
// console.log(flatten(arr))

// const arr1=[1,2,3,4]; const arr2=[3,4,5,6]
// function findIntersection(arr1,arr2){
//     return arr1.filter(x=>arr2.includes(x))
// }

// console.log(findIntersection(arr1,arr2))

// const arr=[1,2,3,4,5,6,7,8,9,10]
// let k=8
// function rotateArray(arr,k){
//     let result=[]
//     k= k % arr.length
//     result.push(...arr.slice(arr.length-k,arr.length))
//     result.push(...arr.slice(0,arr.length-k))
//     return result
// }
// console.log(rotateArray(arr,k))

// const arr=[0, 1, false, 2, '', 3, null, undefined]
// function removeFalsyValues(arr){
//     // let result=[]
//     // for(let i=0;i<arr.length;i++){
//     //     if(arr[i]) result.push(arr[i])
//     // }

//     // return result

//     return arr.filter(Boolean)
// }

// console.log(removeFalsyValues(arr))

// const arr=[1,2,3,4,5]; target=5
// function pairSum(arr,target){
//     let result=[];
//     let hasSeen=new Set();
//     for(let i=0;i<arr.length;i++){
//         let remSum=target-arr[i];
//         if(hasSeen.has(remSum)){
//             result.push([remSum,arr[i]])
//         }
//         hasSeen.add(arr[i])
//     }

//     return result
// }

// console.log(pairSum(arr,target))


