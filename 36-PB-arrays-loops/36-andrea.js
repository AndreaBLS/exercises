"use strict";

// Task 1: sumOfNumbers

const sumOfNumbers = (array) => {
    let result = null;
    for (let i = 1; i < array.length; i++) {
        result += array[i];
    } return result;
}
console.log("Task 1: sumOfNumbers");
console.log(sumOfNumbers([1, 2, 5, 10]));

// Task 2: Hello Friends

console.log("Task 2: Hello Friends");
let friends = ["Jim", "Beam", "Johnny", "Walker"];
for (let i = 0; i < friends.length; i++) {
    console.log("Hello " + friends[i]);
}

// Task 3: City Names

let cityNames = ["Berlin", "Paris", "Rome", "Prague"];
let string = " ";
for (let i = 0; i < cityNames.length; i++) {
    string += cityNames[i] + ", ";
} string = string.substring(0, string.length - 2);

// return array.join(',');

console.log("Task 3: City Names:", string);

// Task 4: Odds and Evens

const oddsEvens = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i] - 1);
        } else {
            newArray.push(array[i] + 1);
        }
    } return newArray;
}
console.log("Task 4: Odds and Evens");
console.log(oddsEvens([3, 5, 2, 4]));
console.log(oddsEvens([6, 9, 10, 20]));

// Task 5: Capitalize

const capitalize = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].toLowerCase().slice(1));
    }
    return newArray;
}

console.log("Task 5: Capitalize");
console.log(capitalize(["matt", "sara", "lara"]));
console.log(capitalize(["samuel", "MARIA", "luke", "mary"]));
console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"]));

// Task 6: No Duplicates!