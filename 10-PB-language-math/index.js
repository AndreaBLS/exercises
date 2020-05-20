"use strict";

// Task 1.a
console.log("Print out the lowest number between -1 and 4:", Math.min(-1, 0, 1, 2, 3, 4))

// Task 1.b
console.log("Print out the lowest number between -1 and 4:", Math.max(-1, 0, 1, 2, 3, 4))

// Task 2

let arrayOne = [3321.32321, 326.76, 76788.7, -9.78, 43.342];
let arrayTwo = [3321.32321, 326.76, 76788.7, -9.78, 28.329];
console.log("Task 2a:\n")
for (let i = 0; i < arrayOne.length; i++) {
    console.log(`${arrayOne[i]} rounded up becomes ${Math.ceil(arrayOne[i])}`);
}
console.log("Task 2b:\n")
for (let i = 0; i < arrayOne.length; i++) {
    console.log(`${arrayTwo[i]} rounded down becomes ${Math.floor(arrayOne[i])}`);
}

// Task 3

let randomNumber = Math.round(Math.random() * 5 + 1);
console.log("\n Task 3: Create a program that prints a random **_integer_** from 1 - 6. Result is:", randomNumber);