Promise.myRace=function (arr){
  return new Promise((resolve , reject)=>{
    arr.forEach((p) => {
      Promise.resolve(p).then(resolve,reject);
    });
  })
}


Promise.allSettled=function (arr){
  return new Promise ((resolve, reject)=>{
    const result=[];
    let count=0;
    arr.forEach((p,i)=>{
      Promise.resolve(p).then(
        (val)=>{
          result[i]=val;
          count++;
          if(count==arr.length) resolve(result);
        },reject)
    })
  })
}

Promise.all=function (arr){
  return new Promise ((resolve, reject)=>{
    if (arr.length === 0) return resolve([]);
    const result=[];
    let count=0;
    arr.forEach((p,i)=>{
      Promise.resolve(p).then(
        (val)=>{
          result[i]={status : "fulfilled" , value : val};
          count++;
          if(count==arr.length) resolve(result);
        },
      (err)=>{
        result[i]={status : "rejected" , reason : err};
        count++;
        if(count==arr.length) resolve(result);
      })
    })
  })
}