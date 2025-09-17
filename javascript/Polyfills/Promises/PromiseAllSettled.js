Promise.myAllSettled=function (promises){
  return new Promise((resolve,reject)=>{
        let count =0;
        const result =[];
        promises.forEach((p,i) => {
            Promise.resolve(p).then((res)=>{
                count++;
                result[i]={status:"Fullfilled" , data : res};
                if(count==promises.length) resolve(result);
            },
            (err)=>{
                count++
                result[i]={status:"Rejected" , reason : err};
                if(count==promises.length) resolve(result);
            })
        });
  }
)}

const p1 = new Promise((resolve) => setTimeout(() => resolve("First ✅"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Second ✅"), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject("Third ❌"), 1500));

Promise.myAllSettled([p1, p2, p3]).then((results) => {
  console.log("All Settled:", results);
});
