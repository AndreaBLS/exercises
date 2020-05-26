"use strict";

//Task 1
let integOne = 51;
let integTwo = 49;

console.log("Task 1:");
if (integOne >= 50 && integOne <= 99 || integTwo >= 50 && integTwo <= 99) {
    console.log(true);
} else {
    console.log("none of them is in the required range!")
}

//Task 2
let integThree = 251;

console.log("Task 2:");
if (integOne >= 50 && integOne <= 99 || integTwo >= 50 && integTwo <= 99 || integThree >= 50 && integThree <= 99) {
    console.log(true);
} else {
    console.log("none of them is in the required range!")
}

//Task 3 
let a = 25;
let b = 35;
let c = 15;

console.log("Task 3:");
if (a > b && a > c) {
    console.log("A has the largest value.");
} else if (b > a && b > c) {
    console.log("B has the largest value.");
} else if (c > a && c > b) {
    console.log("C has the larges value.");
}

//Task 4
let string = "Python";
let pyString = "Py" + string;

console.log("Task 4:");
if (pyString.includes("Py")) {
    console.log(string);
}

//Task 5
console.log("Task 5:");
if ((integOne + integTwo) >= 50 && (integOne + integTwo) <= 80) {
    console.log(65);
} else {
    console.log(80);
}

//Task 6
console.log("Task 6:");
if (integOne + integTwo === 8 || integOne - integTwo === 8) {
    console.log(true);
} else {
    console.log("None of the required conditions for printing true is met in my case.");
}

//Task 7
console.log("Task 7:");
if (integOne === 15 || integTwo === 15 || integOne + integTwo === 15) {
    console.log(true);
} else {
    console.log("None of the required conditions for printing true is met in my case.");
}

//Task 8
console.log("Task 8:");
if (integOne % 7 === 0 || integOne % 11 === 0 || integTwo % 7 === 0 || integTwo % 11 === 0) {
    console.log(true);
} else {
    console.log("None of the required conditions for printing true is met in my case.");
}

//Task 9
console.log("Task 9:");
let sumVar = integOne + integTwo;
if (integOne === integTwo) {
    console.log(sumVar * 3);
}

//Task 10
console.log("Task 10:");
let difference = integOne - 19;
if (difference > 19) {
    console.log(difference * 2);
}

//Task 11
console.log("*BONUS*Task 11:");
let firstName = " Andrea";
let age = 29;
if (firstName < 13) {
    console.log(`${firstName} is a child.`);
} else if (firstName >= 13 && firstName < 20) {
    console.log(`${firstName} is a teenager.`);
} else if (firstName >= 20 && firstName < 30) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is an adult.`)
}

