Promise.myRace=function (promises){
    return new Promise((resolve,reject)=>{
        promises.forEach((p) => {
            Promise.resolve(p).then(resolve,reject);
        });
    })
}

const p1 = new Promise((resolve) => setTimeout(() => resolve("First ✅"), 3000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Second ❌"), 1000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Third ✅"), 2000));

Promise.myRace([p1, p2, p3])
  .then((res) => console.log("Resolved:", res))
  .catch((err) => console.error("Rejected:", err));
