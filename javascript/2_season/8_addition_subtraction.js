/*
    + and - Operators in JavaScript: Numbers, Strings, and Tricky Interview Questions

    1. The + Operator:
        - Used for both addition (numbers) and concatenation (strings).
        - If either operand is a string, + will convert the other operand to a string and concatenate.

    Examples:
*/
console.log(2 + 3);           // 5 (number addition)
console.log("2" + 3);         // "23" (string concatenation)
console.log(2 + "3");         // "23" (string concatenation)
console.log("2" + "3");       // "23" (string concatenation)
console.log("Hello" + 5);     // "Hello5"
console.log(5 + 5 + "5");     // "105" (5+5=10, then "10"+"5"="105")
console.log("5" + 5 + 5);     // "555" (left to right: "5"+5="55", then "55"+5="555")

/*
    2. The - Operator:
        - Only used for subtraction.
        - Always tries to convert operands to numbers.
        - If operands can't be converted to numbers, result is NaN.

    Examples:
*/
console.log(5 - 2);           // 3
console.log("5" - 2);         // 3 ("5" is converted to 5)
console.log(5 - "2");         // 3 ("2" is converted to 2)
console.log("5" - "2");       // 3 (both converted to numbers)
console.log("5" - "a");       // NaN ("a" can't be converted to a number)
console.log("5" - 2 + "2");   // "32" (5-2=3, then 3+"2"="32")
console.log("5" + 2 - "2");   // 50 ("5"+2="52", then "52"-"2"=50)
console.log("5" - 2 - "2");   // 1 (5-2=3, 3-"2"=1)

/*
    3. Tricky Interview Questions:
*/

// What is the output?
console.log(1 + "2" + 3);     // "123" (1+"2"="12", "12"+3="123")
console.log(1 + +"2" + 3);    // 6 (+"2" is 2, so 1+2+3=6)
console.log("10" - "4" - "3" - 2 + "5"); // "15" ("10"-"4"=6, 6-"3"=3, 3-2=1, 1+"5"="15")
console.log("A" - "B" + "2"); // "NaN2" ("A"-"B"=NaN, NaN+"2"="NaN2")
console.log("A" - "B" + 2);   // NaN ("A"-"B"=NaN, NaN+2=NaN)
console.log("2" * "3");       // 6 (both converted to numbers)
console.log("2" * "a");       // NaN ("a" can't be converted to number)
console.log("5" + - "2");     // "5-2" (unary minus: -"2" = -2, "5"+-2 = "5-2")
console.log("5" - - "2");     // 7 (unary minus: -"2" = -2, "5"-(-2) = 5+2 = 7)
// Output of this:
console.log({} + 2); // "[object Object]2"

// Explanation:
// When you write ({} + 2), JavaScript interprets the {} as an empty block, and +2 as a unary plus (which is just 2).
// But when you write console.log({}+2), the {} is interpreted as an object, and + is the addition operator.
console.log({}+2)

// Bonus: What about null and undefined?
console.log(null + 1);        // 1 (null is converted to 0)
console.log(undefined + 1);   // NaN (undefined is NaN in numeric context)
console.log(null - 1);        // -1 (null is 0)
console.log(undefined - 1);   // NaN

/*
    Key Takeaways:
    - + is both addition and string concatenation; if either operand is a string, concatenation happens.
    - - always tries to convert operands to numbers.
    - Be careful with type coercion in JavaScript, especially in interview questions!
*/
