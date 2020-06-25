"use strict";

// Task 1: Object Person.

const person = {
    firstName: "Johnny",
    lastName: "Walker",
    age: 30,
    job: "developer",
    city: "Berlin"
}

console.log("Task 1: Object Person. \n");
for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

// Task 2: Get values.

const getObjectValues = (myObject) => {
    return Object.values(myObject);
}

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
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
    }
}

console.log(`Task 3: Add a Method \n${personTwo.myMethod()}`);