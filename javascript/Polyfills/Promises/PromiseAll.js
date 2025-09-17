Promise.myAll= function (promises){
    return new Promise((resolve, reject) => {
        let count=0;
        const result=[];
        promises.array.forEach((p,i) => {
            Promise.resolve(p).then(res=>{
                count++;
                result[i]=res;
                if(count==promises.length) resolve(result);
            },reject)
        });
    })
}

const p1 = new Promise(resolve => setTimeout(() => resolve("First done ✅"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second done ✅"), 2000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Third failed ❌"), 1500));

myPromiseAll([p1, p2])
  .then(results => console.log("All resolved:", results))
  .catch(err => console.error("Rejected:", err));


  myPromiseAll([p1, p2, p3])
  .then(results => console.log("All resolved:", results))
  .catch(err => console.error("Rejected:", err));
