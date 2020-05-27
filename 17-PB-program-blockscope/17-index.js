"use strict";

// Task 1

let determiner = -2;
let x = null;
if (determiner < 0) {
    x = "Less than 0";
} else {
    x = "Greater or equal to 0";
}


// Task 2
let updater = null;
if (determiner >= 0) {
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(message);
} else {
    updater = "Less than 0";
}

/* **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

We would get "Message is not defined" as "message" only exists inside the block we declared it in. */

/*  3. Ternary v.s. If statement 
* When do you use a ternary v.s. an if statement? Give an example.

We use If statements when we have more than one condition */