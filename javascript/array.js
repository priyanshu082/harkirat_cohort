/*
==========================
Everything About Arrays in JavaScript
==========================

1. What is an Array?
--------------------
An array is a special variable, which can hold more than one value at a time.
In JavaScript, arrays are objects, and can store elements of any type.

Example:
    let arr = [1, 2, 3, "hello", true, {a: 1}];

2. How to Create Arrays?
------------------------
- Using array literal:
    let arr = [1, 2, 3];
- Using Array constructor:
    let arr2 = new Array(4, 5, 6);

3. Accessing and Modifying Elements
-----------------------------------
    let arr = [10, 20, 30];
    console.log(arr[0]); // 10
    arr[1] = 99;
    console.log(arr); // [10, 99, 30]

4. Array Properties and Methods
------------------------------
- arr.length: Number of elements
- arr.push(item): Add to end
- arr.pop(): Remove from end
- arr.unshift(item): Add to start
- arr.shift(): Remove from start
- arr.indexOf(item): First index of item
- arr.includes(item): true/false if item exists
- arr.slice(start, end): Returns a shallow copy
- arr.splice(start, deleteCount, ...items): Add/remove items
- arr.concat(arr2): Merge arrays
- arr.join(separator): Join to string
- arr.reverse(): Reverse array in place
- arr.sort([compareFn]): Sort array

5. Iterating Over Arrays
------------------------
- for loop:
    for(let i=0; i<arr.length; i++) { ... }
- for...of:
    for(let val of arr) { ... }
- forEach:
    arr.forEach((val, idx) => { ... });

6. Higher Order Array Methods
----------------------------
- map: Returns new array with function applied to each element
    let doubled = arr.map(x => x*2);
- filter: Returns new array with elements that pass test
    let evens = arr.filter(x => x%2===0);
- reduce: Reduces array to single value
    let sum = arr.reduce((acc, x) => acc + x, 0);
- find: Returns first element that matches
    let found = arr.find(x => x > 10);
- some: true if any element passes test
- every: true if all elements pass test

7. Multidimensional Arrays
-------------------------
    let matrix = [
        [1,2,3],
        [4,5,6]
    ];
    console.log(matrix[1][2]); // 6

8. Array Destructuring
----------------------
    let [a, b, ...rest] = [1,2,3,4];
    // a=1, b=2, rest=[3,4]

9. Spread and Rest Operators
---------------------------
    let arr1 = [1,2];
    let arr2 = [...arr1, 3, 4]; // [1,2,3,4]
    function sum(...nums) { return nums.reduce((a,b)=>a+b,0); }

10. Array.isArray()
-------------------
    Array.isArray([1,2,3]); // true
    Array.isArray({}); // false

11. Common Interview Questions (Easy/Medium)
--------------------------------------------

Q1. Reverse an array in place.
    function reverseArray(arr) {
        let left = 0, right = arr.length - 1;
        while(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; right--;
        }
        return arr;
    }

Q2. Remove duplicates from an array.
    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

Q3. Find the maximum and minimum in an array.
    function findMaxMin(arr) {
        return {max: Math.max(...arr), min: Math.min(...arr)};
    }

Q4. Flatten a nested array (one level).
    function flatten(arr) {
        return arr.reduce((acc, val) => acc.concat(val), []);
    }
    // For deep flatten:
    function deepFlatten(arr) {
        return arr.flat(Infinity);
    }

Q5. Check if two arrays are equal.
    function arraysEqual(a, b) {
        if(a.length !== b.length) return false;
        for(let i=0; i<a.length; i++) {
            if(a[i] !== b[i]) return false;
        }
        return true;
    }

Q6. Find intersection of two arrays.
    function intersection(a, b) {
        return a.filter(x => b.includes(x));
    }

Q7. Rotate an array by k steps.
    function rotateArray(arr, k) {
        k = k % arr.length;
        return arr.slice(-k).concat(arr.slice(0, -k));
    }

Q8. Find the frequency of each element.
    function frequency(arr) {
        return arr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
    }

Q9. Find the second largest element.
    function secondLargest(arr) {
        let first = -Infinity, second = -Infinity;
        for(let num of arr) {
            if(num > first) {
                second = first;
                first = num;
            } else if(num > second && num < first) {
                second = num;
            }
        }
        return second;
    }

Q10. Remove falsy values from array.
    function removeFalsy(arr) {
        return arr.filter(Boolean);
    }

Q11. Chunk an array into groups of size n.
    function chunkArray(arr, n) {
        let res = [];
        for(let i=0; i<arr.length; i+=n) {
            res.push(arr.slice(i, i+n));
        }
        return res;
    }

Q12. Find all pairs in array that sum to a target.
    function pairSum(arr, target) {
        let res = [];
        let seen = new Set();
        for(let num of arr) {
            if(seen.has(target - num)) {
                res.push([num, target - num]);
            }
            seen.add(num);
        }
        return res;
    }

Q13. Move all zeros to end of array.
    function moveZeros(arr) {
        let nonZero = arr.filter(x => x !== 0);
        let zeros = arr.filter(x => x === 0);
        return nonZero.concat(zeros);
    }

Q14. Find the longest increasing subsequence (LIS) (Medium)
    function lengthOfLIS(nums) {
        if(nums.length === 0) return 0;
        let dp = Array(nums.length).fill(1);
        for(let i=1; i<nums.length; i++) {
            for(let j=0; j<i; j++) {
                if(nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j]+1);
                }
            }
        }
        return Math.max(...dp);
    }

Q15. Find the subarray with the maximum sum (Kadane's Algorithm) (Medium)
    function maxSubArray(nums) {
        let maxSum = nums[0], currSum = nums[0];
        for(let i=1; i<nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }

Q16. Remove element in-place (Leetcode 27)
    function removeElement(nums, val) {
        let k = 0;
        for(let i=0; i<nums.length; i++) {
            if(nums[i] !== val) {
                nums[k++] = nums[i];
            }
        }
        return k; // new length
    }

Q17. Merge two sorted arrays (Leetcode 88)
    function merge(nums1, m, nums2, n) {
        let i = m - 1, j = n - 1, k = m + n - 1;
        while(j >= 0) {
            if(i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }

Q18. Find missing number in array 1..n (Leetcode 268)
    function missingNumber(nums) {
        let n = nums.length;
        let sum = n*(n+1)/2;
        let arrSum = nums.reduce((a,b)=>a+b,0);
        return sum - arrSum;
    }

Q19. Find all unique permutations of an array (Medium)
    function permute(nums) {
        let res = [];
        function backtrack(path, used) {
            if(path.length === nums.length) {
                res.push([...path]);
                return;
            }
            for(let i=0; i<nums.length; i++) {
                if(used[i]) continue;
                used[i] = true;
                path.push(nums[i]);
                backtrack(path, used);
                path.pop();
                used[i] = false;
            }
        }
        backtrack([], []);
        return res;
    }

Q20. Spiral order traversal of a matrix (Medium)
    function spiralOrder(matrix) {
        let res = [];
        if(matrix.length === 0) return res;
        let top = 0, bottom = matrix.length-1, left = 0, right = matrix[0].length-1;
        while(top <= bottom && left <= right) {
            for(let i=left; i<=right; i++) res.push(matrix[top][i]);
            top++;
            for(let i=top; i<=bottom; i++) res.push(matrix[i][right]);
            right--;
            if(top <= bottom) {
                for(let i=right; i>=left; i--) res.push(matrix[bottom][i]);
                bottom--;
            }
            if(left <= right) {
                for(let i=bottom; i>=top; i--) res.push(matrix[i][left]);
                left++;
            }
        }
        return res;
    }

==========================
Tips:
- Practice using all array methods.
- Understand time and space complexity for array operations.
- Be comfortable with in-place vs. out-of-place operations.
- Know how to use Set and Map for array problems.
- Practice Leetcode/EPI/InterviewBit array questions for mastery.

==========================
*/
