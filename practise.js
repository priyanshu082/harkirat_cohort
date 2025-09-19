function cacheFunction(fn) {
  const cache = {};
  return function(...args) {
      const key = JSON.stringify(args);
      if (cache.hasOwnProperty(key)) {
          return cache[key];
      } else {
          const result = fn(args);
          cache[key] = result;
          return result;
      }
  }
}

function slowSquare(n) { 
  for(let i=0;i<1e9;i++){}
  return n * n; 
}
const cachedSquare = cacheFunction(slowSquare);

console.time("First call");
console.log(cachedSquare(5)); 
console.timeEnd("First call");

console.time("Second call");
console.log(cachedSquare(5)); 
console.timeEnd("Second call");