"use strict";

// Task 1
console.log(3 === "3"); // false because 3 is a number and "3" is a string, which means they are not of the same type
console.log(3 == "3"); // true because here we used the "loose" equality, which means we do not check the data type
/* console.log(3 = "3"); SyntaxError: Invalid left-hand side in assignment  */

/* Which comparison operator should we generally use? Why?
We generally use "===" because it also checks that data type matches */


// Task 2
var myTrue = true;
console.log(!myTrue ? true : false);

// Task 3 
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
// It logs "Stacey" because its the first non-falsy value it finds