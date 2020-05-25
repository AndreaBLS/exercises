"use strict";

let a = true;
let b = false;

// Task 1
console.log("1a:", a && b);
console.log("1b:", a || b);
console.log("1c:", !(a && b));

// Task 2 
let x = 3;
let y = 2;
let z = 1;

// Task 3
console.log("3a:", x > z && x > y);
console.log("3b:", x != y);
console.log("3c:", z < y || z > x);
console.log("3d:", x == z || x != y);
console.log("3e:", x >= 10 && y <= 10);
console.log("3f:", x * z < 100 || x * y > 100);