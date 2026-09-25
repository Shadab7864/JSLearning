"use strict"//treats all as newer version of JS
// any way latest JS by default runs in strict mode
console.log(3+3); //output: 6
console.log(3- "3"); 
//output: 0 because JS will convert string to number
console.log(3- "3a");
// 6
// 0
// NaN since we are trying to subtract a number from a string
//  which is not a number (NaN)Not a Number
console.log(3 + "3"); //output: 33
// '+' operator is used for concatenation when one of the operands is a string
// So no conversion will be done and the output will be a string
let b = null;
console.log(b); //output: null
console.log(typeof b); //output: object
// null is a special value in JS which represents the absence of any value
// but its type is object which is a bug in JS and 
// it will not be fixed because it will break the existing code
let c = undefined;
console.log(c); //output: undefined
console.log(typeof c); //output: undefined
let d = NaN;
console.log(d); //output: NaN
console.log(typeof d); //output: number 
let e = Infinity;
console.log(e); //output: Infinity
console.log(typeof e); //output: number
// Infinity is a special value in JS which represents the mathematical infinity
// but its type is number which is a bug in JS and 
// it will not be fixed because it will break the existing code
// All data types in JS are dynamic 
// which means we can change the type of variable at runtime
//example
let f = 10;
console.log(`Value of f is: ${f}`); //output: 10
console.log(`Type of f is: ${typeof f}`);
f = "Hello"; // reassigning a string value to f
console.log(`Value of f is: ${f}`); //output: Hello
console.log(`Type of f is: ${typeof f}`);
//we can lock the type of variable using const keyword
const g = 10;
console.log(`Value of g is: ${g}`);
// g="Hello"; // this will give an error because we can't reassign a value to a const variable 
// console.log(`Value of g is: ${g}`); //output: 10
let age = 25; // integer
let str = "Kaiizen"; // string
let char = 'C'; // character
let salary = 10.2; // number
console.log(`Type of salary is: ${typeof salary}`); //output: number
console.log(`Type of age is: ${typeof age}`); //output: number