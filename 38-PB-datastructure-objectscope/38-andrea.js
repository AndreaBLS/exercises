"use strict";

// Task 1

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    myMethod: function () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    }
}

console.log("Task 1: ");
console.log(student.myMethod());

// Task 2

const person = {
    firstName: "Johnny",
    lastName: "Walker",
    age: 12,
    job: "developer",
    city: "Berlin",
    myMethod: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
    },
    objectLength: function () {
        return `This object's length is ${Object.keys(this).length}`
    }
}

console.log("Task 2:");
console.log(person.myMethod());
console.log(person.objectLength());