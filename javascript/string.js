/*
==========================
Everything About Strings in JavaScript
==========================

1. What is a String?
--------------------
A string is a sequence of characters used to represent text. In JavaScript, strings are immutable primitives.

Example:
    let str = "hello";
    let str2 = 'world';
    let str3 = `template ${str}`;

2. String Creation
------------------
- Using string literals:
    let s = "abc";
- Using String constructor (not recommended for most cases):
    let s2 = new String("abc");

3. String Properties and Methods
-------------------------------
- str.length: Number of characters
- str[index]: Access character at index
- str.charAt(i): Character at index i
- str.charCodeAt(i): Unicode of char at i
- str.concat(str2): Concatenate
- str.includes(substr): true/false
- str.indexOf(substr): First index or -1
- str.lastIndexOf(substr): Last index or -1
- str.startsWith(prefix): true/false
- str.endsWith(suffix): true/false
- str.slice(start, end): Substring from start to end-1
- str.substring(start, end): Like slice, but no negative indices
- str.substr(start, length): Substring of given length (deprecated)
- str.toUpperCase(), str.toLowerCase()
- str.trim(), str.trimStart(), str.trimEnd()
- str.replace(search, replace): Replace first match
- str.replaceAll(search, replace): Replace all matches (ES2021+)
- str.split(separator): Split into array
- str.repeat(n): Repeat string n times
- str.padStart(len, pad), str.padEnd(len, pad)

4. String Immutability
----------------------
Strings cannot be changed in place. All string methods return new strings.

5. Template Literals
--------------------
    let name = "Sam";
    let msg = `Hello, ${name}!`;
    // Multiline:
    let multi = `line1
line2`;

6. Escape Characters
--------------------
- \n: Newline
- \t: Tab
- \": Double quote
- \': Single quote
- \\: Backslash

7. Iterating Over Strings
-------------------------
- for(let ch of str) { ... }
- for(let i=0; i<str.length; i++) { ... }

8. String Comparison
--------------------
- "abc" === "abc" // true
- "a" < "b" // true (lexicographical)

9. Common String Interview Questions
------------------------------------

Q1. Reverse a string.
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

Q2. Check if a string is a palindrome.
    function isPalindrome(str) {
        str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return str === str.split("").reverse().join("");
    }

Q3. Count the frequency of each character.
    function charFrequency(str) {
        let freq = {};
        for(let ch of str) {
            freq[ch] = (freq[ch] || 0) + 1;
        }
        return freq;
    }

Q4. Find the first non-repeating character.
    function firstNonRepeatingChar(str) {
        let freq = {};
        for(let ch of str) freq[ch] = (freq[ch] || 0) + 1;
        for(let ch of str) if(freq[ch] === 1) return ch;
        return null;
    }

Q5. Capitalize the first letter of each word.
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, ch => ch.toUpperCase());
    }

Q6. Check if two strings are anagrams.
    function areAnagrams(a, b) {
        let norm = s => s.replace(/\W/g, "").toLowerCase().split("").sort().join("");
        return norm(a) === norm(b);
    }

Q7. Remove duplicate characters from a string.
    function removeDuplicates(str) {
        return [...new Set(str)].join("");
    }

Q8. Find the longest word in a sentence.
    function longestWord(str) {
        return str.split(/\s+/).reduce((a, b) => a.length >= b.length ? a : b, "");
    }

Q9. Count vowels and consonants.
    function countVowelsAndConsonants(str) {
        let v = 0, c = 0;
        for(let ch of str.toLowerCase()) {
            if(/[aeiou]/.test(ch)) v++;
            else if(/[a-z]/.test(ch)) c++;
        }
        return {vowels: v, consonants: c};
    }

Q10. Check if a string contains only digits.
    function isNumeric(str) {
        return /^\d+$/.test(str);
    }

Q11. Find all substrings of a string.
    function allSubstrings(str) {
        let res = [];
        for(let i=0; i<str.length; i++) {
            for(let j=i+1; j<=str.length; j++) {
                res.push(str.slice(i, j));
            }
        }
        return res;
    }

Q12. Find the longest common prefix among an array of strings.
    function longestCommonPrefix(arr) {
        if(!arr.length) return "";
        let prefix = arr[0];
        for(let s of arr) {
            while(!s.startsWith(prefix)) {
                prefix = prefix.slice(0, -1);
                if(!prefix) return "";
            }
        }
        return prefix;
    }

Q13. Convert string to camelCase.
    function toCamelCase(str) {
        return str
            .replace(/[-_ ]+(\w)/g, (_, c) => c ? c.toUpperCase() : "")
            .replace(/^\w/, c => c.toLowerCase());
    }

Q14. Find the most frequent word in a sentence.
    function mostFrequentWord(str) {
        let words = str.toLowerCase().match(/\b\w+\b/g) || [];
        let freq = {};
        for(let w of words) freq[w] = (freq[w] || 0) + 1;
        let max = 0, res = "";
        for(let w in freq) if(freq[w] > max) { max = freq[w]; res = w; }
        return res;
    }

Q15. Replace all spaces with '%20' (URLify).
    function urlify(str) {
        return str.trim().replace(/ /g, "%20");
    }

==========================
Tips:
- Practice using all string methods and regular expressions.
- Know the difference between slice, substring, and substr.
- Understand string immutability.
- Be comfortable with template literals and escape sequences.
- Practice Leetcode/EPI/InterviewBit string-related questions for mastery.
- Know about Unicode, code points, and surrogate pairs for advanced cases.
- Understand how to use RegExp for pattern matching and replacement.
- Be able to explain how split, join, and replace work.
- Know how to handle edge cases: empty string, whitespace, special characters, etc.

==========================
*/
