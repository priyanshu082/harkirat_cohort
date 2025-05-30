// LIS Test Cases - Edge Cases for Algorithm Tuning

const testCases = [
    // Basic cases
    {
        name: "Normal case",
        array: [10, 9, 2, 5, 3, 7, 101, 18],
        expectedLIS: [2, 3, 7, 101], // or [2, 3, 7, 18]
        expectedLength: 4
    },
    
    {
        name: "Already sorted",
        array: [1, 2, 3, 4, 5, 6, 7, 8],
        expectedLIS: [1, 2, 3, 4, 5, 6, 7, 8],
        expectedLength: 8
    },
    
    // Edge cases
    {
        name: "Single element",
        array: [5],
        expectedLIS: [5],
        expectedLength: 1
    },
    
    {
        name: "Empty array",
        array: [],
        expectedLIS: [],
        expectedLength: 0
    },
    
    {
        name: "Two elements ascending",
        array: [1, 2],
        expectedLIS: [1, 2],
        expectedLength: 2
    },
    
    {
        name: "Two elements descending",
        array: [2, 1],
        expectedLIS: [1], // or [2]
        expectedLength: 1
    },
    
    // Challenging cases
    {
        name: "All same elements",
        array: [5, 5, 5, 5, 5],
        expectedLIS: [5],
        expectedLength: 1
    },
    
    {
        name: "Strictly decreasing",
        array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        expectedLIS: [1], // Any single element
        expectedLength: 1
    },
    
    {
        name: "Multiple valid LIS",
        array: [1, 3, 2, 4],
        expectedLIS: [1, 2, 4], // or [1, 3, 4]
        expectedLength: 3
    },
    
    {
        name: "Plateau pattern",
        array: [1, 2, 2, 3, 3, 4, 4, 5],
        expectedLIS: [1, 2, 3, 4, 5],
        expectedLength: 5
    },
    
    // Complex patterns
    {
        name: "Mountain pattern",
        array: [1, 2, 3, 4, 5, 4, 3, 2, 1],
        expectedLIS: [1, 2, 3, 4, 5],
        expectedLength: 5
    },
    
    {
        name: "Valley pattern",
        array: [5, 4, 3, 2, 1, 2, 3, 4, 5],
        expectedLIS: [1, 2, 3, 4, 5],
        expectedLength: 5
    },
    
    {
        name: "Zigzag pattern",
        array: [1, 5, 2, 6, 3, 7, 4, 8],
        expectedLIS: [1, 2, 3, 4, 8], // or [1, 2, 3, 7] etc.
        expectedLength: 5
    },
    
    {
        name: "Large numbers",
        array: [1000000, 999999, 1000001, 1000002],
        expectedLIS: [999999, 1000001, 1000002],
        expectedLength: 3
    },
    
    {
        name: "Negative numbers",
        array: [-5, -3, -1, 0, 2, 4],
        expectedLIS: [-5, -3, -1, 0, 2, 4],
        expectedLength: 6
    },
    
    {
        name: "Mixed positive/negative",
        array: [-1, 3, -4, 5, -2, 6],
        expectedLIS: [-4, -2, 6], // or [-1, 3, 5, 6]
        expectedLength: 4
    },
    
    // Performance test cases
    {
        name: "Long ascending",
        array: Array.from({length: 1000}, (_, i) => i),
        expectedLength: 1000
    },
    
    {
        name: "Long descending",
        array: Array.from({length: 1000}, (_, i) => 1000 - i),
        expectedLength: 1
    },
    
    {
        name: "Random large array",
        array: [4, 10, 4, 3, 8, 9, 5, 7, 3, 6, 1, 2, 11, 12],
        expectedLIS: [3, 5, 6, 11, 12], // One possible LIS
        expectedLength: 5
    },
    
    // Tricky cases
    {
        name: "Multiple short sequences",
        array: [1, 2, 5, 6, 3, 4, 7, 8],
        expectedLIS: [1, 2, 3, 4, 7, 8],
        expectedLength: 6
    },
    
    {
        name: "Duplicate with gaps",
        array: [1, 1, 2, 2, 3, 3, 4, 4],
        expectedLIS: [1, 2, 3, 4],
        expectedLength: 4
    },
    
    {
        name: "Close numbers",
        array: [1, 1.1, 1.01, 1.2, 1.11, 1.3],
        expectedLIS: [1, 1.01, 1.11, 1.3],
        expectedLength: 4
    }
];

// Test runner function
function runTests(lisFunction) {
    console.log("Running LIS tests...\n");
    
    testCases.forEach((testCase, index) => {
        console.log(`Test ${index + 1}: ${testCase.name}`);
        // console.log(`Input: [${testCase.array.slice(0, 20).join(', ')}${testCase.array.length > 20 ? '...' : ''}]`);
        
        const startTime = performance.now();
        const result = lisFunction(testCase.array);
        const endTime = performance.now();
        
        console.log(`Output length: ${result.length || result}`);
        console.log(`Expected length: ${testCase.expectedLength}`);
        console.log(`Time: ${(endTime - startTime).toFixed(4)}ms`);
        
        const passed = (result.length || result) === testCase.expectedLength;
        console.log(`Status: ${passed ? '✅ PASS' : '❌ FAIL'}`);
        console.log('---');
    });
}

function LIS(arr){
    let maxi=0;
    for(let i=0;i<arr.length;i++){
        let current=arr[i];
        let count=1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>current){
                current=arr[j];
                count++
            }
        }
        
        maxi=Math.max(maxi,count)
    }

    return maxi;
}

runTests(LIS)


// Example usage:
// runTests(yourLISFunction);