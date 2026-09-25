console.log(3+3); //output: 6 // No conversion as simple addition
console.log(3- "3"); 
//output: 0 because JS will convert string to number
console.log(3- "3a");
// NaN since we are trying to subtract a number from a string
//  which is not a number (NaN)Not a Number
console.log(3 + "3"); //output: 33
// '+' operator is used for concatenation when one of the operands is a string
// So no conversion will be done and the output will be a string
/*
as you can see all the above conversion was taken care by JS automatically
 but we can also do the conversion manually using the following methods
*/
//example of manual conversion
let num = 10;
let str = "20";
console.log(num + Number(str)); //output: 30
console.log(String(num) + str); //output: 1020
console.log(3- Number("3a")); //output: NaN
/* in above example we are trying to convert a string which is 
 not a number so we got output as 'NaN'
 */
console.log(Number("3a")); //output: NaN
let number = true;
console.log(typeof number); //output: boolean
console.log(Number(number)); //output: 1 as True  = 1 and False = 0
let number2 = false;
console.log(typeof number2); //output: boolean
console.log(Number(number2)); //output: 0 as True  = 1 and False = 0
// let bool = False; // False is not a valid boolean value in JS 
// it should be false same goes for True it should be true
// console.log(typeof bool); //output: boolean
// console.log(Number(bool)); //output: 0 as True  = 1 and False = 0
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // converting number to boolean 1 became true and 0 will become false
console. log (booleanIsLoggedIn); // output: true


// let isLogged = 10

// let booleanIsLogged = Boolean(isLogged)
//  // converting number to boolean 1 became true and 0 will become false
//  // if you are converting any number other than 0 to boolean it will become true and 0 will become false
//  // can be negative or positive number
// console. log (booleanIsLogged); // output: true

let isLogged = 'a'//"Some String"

let booleanIsLogged = Boolean(isLogged)
/*converting string/Character to boolean any string other than empty 
 string will become true and empty string will become false
 */
console. log (booleanIsLogged); // output: true

let isLoggedStr = ''//""

let booleanIsLoggedStr = Boolean(isLoggedStr)
/*converting string to boolean any string other than empty 
 string will become true and empty string will become false
 */
console. log (booleanIsLoggedStr); // output: false
/*
// 1 => true; 0 => false
//" => false
"hitesh" => true
will be false for null, undefined, NaN, 0, "" (empty string)
any other value will be true
*/

