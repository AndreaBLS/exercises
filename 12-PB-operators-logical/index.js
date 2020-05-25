"use strict";

let a = true;
let b = false;

// Task 1
console.log("1a:", a && b); // False as a && b would need to be both True.
console.log("1b:", a || b); // True as on them (a) is True!
console.log("1c:", !(a && b)); // no idea!

// Task 2 
let x = 3;
let y = 2;
let z = 1;

// Task 3
console.log("3a:", x > z && x > y); // True as is X is greater than both Z & Y
console.log("3b:", x != y); // True as X & Y are not equals
console.log("3c:", z < y || z > x); // True as Z is less than Y
console.log("3d:", x == z || x != y);  // True because even if X is not Equal to Z, X is not equal to Y so the needed condition of one True is present.
console.log("3e:", x >= 10 && y <= 10); // False because neither condition is met.
console.log("3f:", x * z < 100 || x * y > 100); // True because X * Z is less than 100, so atleats one condition is met.