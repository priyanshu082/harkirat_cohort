Promise.myAny=function (promises){
    return new Promise((resolve,reject)=>{
        let rejections = [];
        let count = 0;
        promises.forEach((p,i) => {
            Promise.resolve(p).then(resolve,(err)=>{
                rejections[i]=err;
                count++;
                if(count==promises.length) {
                    reject(rejections);
                }
            })
        });
    })
}


const p1 = new Promise((_, reject) => setTimeout(() => reject("First ❌"), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Second ❌"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Third ✅"), 1500));

Promise.myAny([p1, p2, p3])
  .then((res) => console.log("Resolved:", res))
  .catch((err) => console.error("Rejected:", err));

Promise.myAny([p1,p2])
    .then((res)=>console.log("Resolved", res))
    .catch((err)=>console.error("Rejected:", err))
