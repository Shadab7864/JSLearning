// We will be learning about variable and there types 
/*
    we have three different types of variables declaration
    1 - var -- when we need to update something globally
    2 - let -- we need to define within global Scope
    3 - const -- we don't need to change anywhere else in program 
*/
// Declaration of variable is same whether we use var , let or const
// in JS we don't have any variable types like int , float , char etc. 
// we have only one type of variable which is var/let and const
// it;s type changes based on what we assign
// var age = 25; // integer
// var str = "Kaiizen"; // string
// var char = 'C'; // character
// var salary = 10.2; // float
// let age = 25; // integer
// let str = "Kaiizen"; // string
// let char = 'C'; // character
// let salary = 10.2; // float
// const age = 25; // integer
// const str = "Kaiizen"; // string
// const char = 'C'; // character
// const salary = 10.2; // float
// if we run the above file i will get an error 
// because we can't declare same variable name with let and const even though 
// they are in different scope 
// we can declare same variable name with var but it will be a bad practice
// You will get the following error if you run the above code
// SyntaxError: Identifier 'age' has already been declared
//     at wrapSafe (node:internal/modules/cjs/loader:1804:18)
//     at Module._compile (node:internal/modules/cjs/loader:1846:20)
//     at Object..js (node:internal/modules/cjs/loader:2003:10)
//     at Module.load (node:internal/modules/cjs/loader:1594:32)
//     at Module._load (node:internal/modules/cjs/loader:1396:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// var a = "apple";
// var a = "banana"; // this is valid but not a good practice
// // we can also declare multiple variables in one line
// var x = 10, y = 20, z = 30;
// let p = 10, q = 20, r = 30;
// const m = 10, n = 20, o = 30;
// // we can also declare variables without assigning any value to them
// var a1;
// let b1;
// const c1 = 100; // this will give an error because const variable must be initialized
// // we can also assign value to variable after declaration
// a1 = 10;
// b1 = 20;
// // c1 = 30; // this will give an error because const variable can't be reassigned
// // we can also declare variables without using var, let or const but it is not a good practice
// d1 = 40; // this will create a global variable d1 not recommended ( global scope pollution )
// in order to see the value of variable we can use console.log() function
// console.log("Value of a is: " + a);
// console.log("Value of a1 is: " + a1);
// console.log("Value of b1 is: " + b1);
// console.log("Value of c1 is: " + c1);

// we can also use template literals to print the value of variable
// console.log(`Value of a is: ${a}`);
// console.log(`Value of a1 is: ${a1}`);
// console.log(`Value of b1 is: ${b1}`);
// console.log(`Value of c1 is: ${c1}`);
// we can also use typeof operator to check the type of variable
// console.log(`Type of a is: ${typeof a}`);
// console.log(`Type of a1 is: ${typeof a1}`);
// console.log(`Type of b1 is: ${typeof b1}`);
// console.log(`Type of c1 is: ${typeof c1}`);
// we also have array type in JS which is a collection of values
// var arr = [1, 2, 3, 4, 5];
// console.log(`Value of arr is: ${arr}`); // we don't need for loop to print the array values 
// because console.log() will automatically convert the array to string
// we can also use loop to print the array values`
// for (var i = 0; i < arr.length; i++) {
//     console.log(`Value of arr[${i}] is: ${arr[i]}`);
// }
// console.log(`Type of arr is: ${typeof arr}`);
// Array is a special type of object in JS a
// nd it is used to store multiple values in a single variable
// var array;
// console.log(`Value of array is: ${array}`); // this will print undefined because we haven't assigned any value to array 
// console.log(`Type of array is: ${typeof array}`); // this will print undefined because we haven't assigned any value to array
// lets see difference in let and var in terms of scope
{ // let and var scope

    let a =10;
    var b = 20;
    if (true) {
        let a = 30; // this a is different from the a declared outside the if block
        console.log(`Value of a inside if block is: ${a}`);// print 30
    }
    console.log(`Value of a outside if block is: ${a}`);// print 10
    if (true) {
        var b = 40; // this b is same as the b declared outside the if block
        console.log(`Value of b inside if block is: ${b}`);// print 40
    }
    console.log(`Value of b outside if block is: ${b}`);// print 40
    //output of the above code will be
    // PS C:\JSAndReact> node .\JSBasic\Variables.js
    // Value of a inside if block is: 30
    // Value of a outside if block is: 10
    // Value of b inside if block is: 40
    // Value of b outside if block is: 40
}