// ==============================
// Level 1: Array Basics
// ==============================

// 1. Reverse an array without using .reverse()
function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// 2. Remove duplicates from an array
function removeDuplicates(arr) {
    // Using Set
    return [...new Set(arr)];
    // Or using filter:
    // return arr.filter((item, idx) => arr.indexOf(item) === idx);
}

// 3. Flatten a nested array (deep flatten)
function flattenDeep(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)
    , []);
    // Or simply: return arr.flat(Infinity);
}

// 4. Implement Array.prototype.map manually
function customMap(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i, arr));
    }
    return res;
}

// 5. Implement Array.prototype.filter manually
function customFilter(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) res.push(arr[i]);
    }
    return res;
}

// 6. Find the frequency of elements in an array
function frequency(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

// 7. Group elements in an array by a property or function
function groupBy(arr, fn) {
    return arr.reduce((acc, item) => {
        const key = fn(item) 
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}

// ==============================
// Level 2: Array + Objects Combo
// ==============================

// 1. Group array of objects by a key
// Example: groupByKey(users, 'age')
function groupByKey(arr, key) {
    return arr.reduce((acc, obj) => {
        const group = obj[key];
        if (!acc[group]) acc[group] = [];
        acc[group].push(obj);
        return acc;
    }, {});
}
// Or: groupBy(users, u => u.age)

// 2. Deep clone a nested object or array
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
    // Or if available: return structuredClone(obj);
}

// 3. Sort an array of objects by a key
// Example: sortByKey(users, 'age')
function sortByKey(arr, key) {
    return [...arr].sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}

// 4. Merge two arrays of objects by ID
// If objects with same id, merge properties (second array overrides)
function mergeById(arr1, arr2, idKey = 'id') {
    const map = new Map();
    arr1.forEach(obj => map.set(obj[idKey], { ...obj }));
    arr2.forEach(obj => {
        if (map.has(obj[idKey])) {
            map.set(obj[idKey], { ...map.get(obj[idKey]), ...obj });
        } else {
            map.set(obj[idKey], { ...obj });
        }
    });
    return Array.from(map.values());
}

// 5. Transform nested data into flat data (tree to flat array)
function flattenTree(tree, childKey = 'children') {
    let res = [];
    function helper(node) {
        const { [childKey]: children, ...rest } = node;
        res.push(rest);
        if (children && Array.isArray(children)) {
            children.forEach(helper);
        }
    }
    if (Array.isArray(tree)) {
        tree.forEach(helper);
    } else {
        helper(tree);
    }
    return res;
}

// 6. Transform flat data into nested tree
// flatArr: [{id, parentId, ...}], returns root nodes
function buildTree(flatArr, idKey = 'id', parentKey = 'parentId', childKey = 'children') {
    const idMap = {};
    flatArr.forEach(item => idMap[item[idKey]] = { ...item, [childKey]: [] });
    const roots = [];
    flatArr.forEach(item => {
        if (item[parentKey] == null) {
            roots.push(idMap[item[idKey]]);
        } else if (idMap[item[parentKey]]) {
            idMap[item[parentKey]][childKey].push(idMap[item[idKey]]);
        }
    });
    return roots;
}

// ==============================
// Level 3: Real-World Coding Scenarios
// ==============================

// 1. Debounce function
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}

// 2. Throttle function
function throttle(fn, delay) {
    let last = 0;
    return function(...args) {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn.apply(this, args);
        }
    }
}

// 3. Memoize utility
function memoize(fn, resolver) {
    const cache = new Map();
    return function(...args) {
        const key = resolver ? resolver(...args) : JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

// 4. Custom React-like useDebounce hook (vanilla JS version)
function useDebounce(value, delay, callback) {
    let timeout;
    return function(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => callback(newValue), delay);
    }
}
// Usage: const debounced = useDebounce(value, 300, v => { ... });

// 5. Convert array to object by id
// Example: arrayToObject([{id:1, name:'a'}, {id:2, name:'b'}])
function arrayToObject(arr, idKey = 'id') {
    return arr.reduce((acc, obj) => {
        acc[obj[idKey]] = obj;
        return acc;
    }, {});
}

// 6. Deep equality check for objects and arrays
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (a === null || b === null) return false;
    if (typeof a !== 'object') return false;
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    if (Array.isArray(a)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}
