// ================================================
// 🔥 Callback vs Promise - Full Explanation
// ================================================

// ------------------------------------------------
// 1. Callback
// ------------------------------------------------
// Callback ek function hota hai jo dusre function ko
// as an argument pass kiya jata hai, aur wo baad me
// (jab async kaam complete ho) call hota hai.
//
// Problem:
// - Agar chaining karni ho (pehle ek kaam, phir dusra),
//   to nested callbacks bante hain (Callback Hell).
// ------------------------------------------------

function getData(callback) {
    setTimeout(() => {
      callback(null, "Data mil gaya!");
    }, 1000);
  }
  
  getData((err, result) => {
    if (err) console.log("Error:", err);
    else console.log(result);
  });
  
  // ------------------------------------------------
  // Example of Callback Hell
  // ------------------------------------------------
  // getUser(id, (err, user) => {
  //   getProfile(user, (err, profile) => {
  //     getPosts(profile, (err, posts) => {
  //       // aur aage aur nested...
  //     });
  //   });
  // });
  
  // ------------------------------------------------
  // 2. Promise
  // ------------------------------------------------
  // Promise ek object hai jo future me resolve/reject hota hai.
  // - resolve → success case
  // - reject → error case
  //
  // Promises se async code clean hota hai,
  // aur `.then` chain aur `.catch` se errors
  // easily handle hote hain.
  // ------------------------------------------------
  
  function getDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data mil gaya!");
        // reject("Kuch galat ho gaya!"); // try error
      }, 1000);
    });
  }
  
  getDataPromise()
    .then(result => console.log(result))
    .catch(err => console.log("Error:", err));
  
  // ------------------------------------------------
  // Promise Chaining Example
  // ------------------------------------------------
  // getUser(id)
  //   .then(user => getProfile(user))
  //   .then(profile => getPosts(profile))
  //   .then(posts => console.log(posts))
  //   .catch(err => console.log("Error:", err));
  
  // ------------------------------------------------
  // 3. Promise.resolve
  // ------------------------------------------------
  // `Promise.resolve(value)` → jo bhi value ya promise diya
  // usse ek proper promise bana deta hai.
  //
  // Useful in race/all polyfills where input can be
  // either a normal value OR promise.
  // ------------------------------------------------
  
  Promise.resolve(42).then(v => console.log(v)); // normal value → promise bana
  
  const p = new Promise(r => r("Hello"));
  Promise.resolve(p).then(v => console.log(v)); // already promise → same as is
  
  // ------------------------------------------------
  // 4. Polyfill Example: Promise.myRace
  // ------------------------------------------------
  // Ye example batata hai ki race kaise kaam karta hai.
  // Sabse pehle jo promise resolve/reject hoga,
  // wahi outer promise ko settle kar dega.
  // ------------------------------------------------
  
  Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
      for (let p of promises) {
        Promise.resolve(p).then(resolve, reject);
      }
    });
  };
  
  const p1 = new Promise(res => setTimeout(() => res("First"), 100));
  const p2 = new Promise(res => setTimeout(() => res("Second"), 200));
  
  Promise.myRace([p1, p2]).then(console.log); // "First" (fastest)
  
  // ------------------------------------------------
  // 5. Callback vs Promise Quick Difference
  // ------------------------------------------------
  // | Feature          | Callback                        | Promise                           |
  // |------------------|---------------------------------|-----------------------------------|
  // | Error Handling   | Har jagah alag handle karna     | Single `.catch` se easy           |
  // |------------------|---------------------------------|-----------------------------------|
  // | Readability      | Nested → Callback Hell          | Chain aur async/await → clean     |
  // |------------------|---------------------------------|-----------------------------------|
  // | Composition      | Mushkil (parallel async)        | Easy (`Promise.all`, `race`)      |
  // |------------------|---------------------------------|-----------------------------------|
  // | Control          | Function ke upar hai            | Promise object tumhare paas       |
  // |------------------|---------------------------------|-----------------------------------|
  // | Modern Support   | Purana tariqa                   | Modern standard (with async/await)|
  // |------------------|---------------------------------|-----------------------------------|
  
  // Conclusion:
  // - Callbacks → simple tasks ke liye theek
  // - Promises → complex async kaam ke liye best
  // - Async/Await (promises ke upar) → sabse readable
  // ------------------------------------------------
  