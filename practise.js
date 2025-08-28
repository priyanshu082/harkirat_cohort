const arr1 = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 }
  ];
  
  const arr2 = [
    { id: 2, city: "Delhi", country: "India" },
    { id: 3, city: "London", country: "UK" },
    { id: 4, city: "New York", country: "USA" }
  ];

  const map2= new Map(arr2.map(obj=> [obj.id,obj]));

  const common = arr1
  .filter(obj1 => map2.has(obj1.id))
  .map(obj1 => ({...obj1 , ...map2.get(obj1.id)}))

  console.log(common)



