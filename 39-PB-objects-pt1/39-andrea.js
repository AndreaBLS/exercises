"use strict";

// Task 1: Object Person.

const person = {
    firstName: "Johnny",
    lastName: "Walker",
    age: 30,
    job: "developer",
    city: "Berlin"
};

console.log("\nTask 1: Object Person.");
for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
};

// Task 2: Get values.

const getObjectValues = (myObject) => {
    return Object.values(myObject);
};

console.log("\nTask 2: Get Values.");
console.log(getObjectValues(person));

// Task 3: Add a Method

let personTwo = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    myMethod: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}.`;
    }
};

console.log(`\nTask 3: Add a Method \n${personTwo.myMethod()}`);

// Bonus Tasks 1: Convert keys and values into an array
console.log("\nBonus Tasks 1: Convert keys and values into an array")
const objectTwo = {
    A: 1,
    B: 2,
    C: 3
};
const objectThree = {
    cats: 1,
    dogs: 2,
    turtles: 4
};
const convertObjToArr = (obj) => {
    console.log(Object.entries(obj));
};
convertObjToArr(objectTwo);
convertObjToArr(objectThree);

// Bonus Tasks 2: List Properties.

function arrayProperties(object) {
    console.log(Object.keys(object));
};
console.log("\nBonus Tasks 2: List Properties");
arrayProperties(person);

// Bonus Tasks 3: Merge.

let first = { firstName: "John" };
let last = { lastName: "Smith" };

const objectMerger = (obj1, obj2) => {
    return Object.assign(obj1, obj2);
};

console.log("\nBonus Tasks 3: Merge");
console.log(objectMerger(first, last));