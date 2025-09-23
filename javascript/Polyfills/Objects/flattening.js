
    // Example:
    const input = {a:1, b:{c:2, d:{e:3}}}
    // Output: {a:1, "b.c":2, "b.d.e":3}
    function flattenObject(obj, prefix = "", res = {}) {
        for (let key in obj) {
            let newKey = prefix ? prefix + "." + key : key;
            if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
                flattenObject(obj[key], newKey, res);
            } else {
                res[newKey] = obj[key];
            }
        }
        return res;
    }


     

    // If we have an array in the object, we can flatten it by including the array index in the key path.
    // For example: {a: [1,2], b: {c: [3,4]}} => { "a.0": 1, "a.1": 2, "b.c.0": 3, "b.c.1": 4 }
    function flattenObjectWithArrays(obj, prefix = "", res = {}) {
        if (Array.isArray(obj)) {
            obj.forEach((item, i) => {
                let newKey = prefix ? prefix + "." + i : "" + i;
                if (Array.isArray(item) || (typeof item === "object" && item !== null)) {
                    // Recursively flatten if item is an array or object
                    flattenObjectWithArrays(item, newKey, res);
                } else {
                    res[newKey] = item;
                }
            });
        } else if (typeof obj === "object" && obj !== null) {
            for (let key in obj) {
                let newKey = prefix ? prefix + "." + key : key;
                if (typeof obj[key] === "object" && obj[key] !== null) {
                    flattenObjectWithArrays(obj[key], newKey, res);
                } else {
                    res[newKey] = obj[key];
                }
            }
        } else {
            // primitive value at root
            res[prefix] = obj;
        }
        return res;
    }

    // Example usage:
    // const input = {a:1, b:{c:2, d:{e:3}}, f: [4, {g: 5}]};
    // flattenObjectWithArrays(input)
    // Output: {a:1, "b.c":2, "b.d.e":3, "f.0":4, "f.1.g":5}
