"use strict";

// Task 1

let determiner = 3;
let x = null;
if (determiner < 0) {
    x = "Less than 0";
} else {
    x = "Greater or equal to 0";
}
console.log(x);
x = determiner < 0 ? "Less than 0" : "Greater or equal to 0";
console.log(x);

// Task 2
let updater = null;
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(message);
} else {
    updater = "Less than 0";
}
console.log(updater);

/* **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

We would get "Message is not defined" as "message" only exists inside the block we declared it in. */

/*  3. Ternary v.s. If statement
* When do you use a ternary v.s. an if statement? Give an example.

We use If statements when we have more than one statement */

let age = 51;
let drive = null;
console.log(age >= 18 ? "i can vote" : " i cannot vote");
if (age >= 18) {
    console.log("i can vote");
    drive = true;
} else {
    console.log("i cannot vote");
    drive = false;
}
console.log(drive);