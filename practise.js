function debounce(fn,delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer=setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

let count=0;
const debounced=debounce((num)=>{
  count++ ;
  console.log("Debounced " , count)
}, 1000)

debounced(2);
debounced(5);
debounced(9);