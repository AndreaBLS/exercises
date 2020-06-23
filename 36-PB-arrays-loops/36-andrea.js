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
}

console.log("Task 3: City Names:", string);

// Task 4: Odds and Evens

 const oddsEvens = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i]--; // i was doing +1 but it doesnt work :( i would need to create a variable that contains array[i] + 1??
        } else {
            array[i]++;
        }
    } return array
}
console.log("Task 4: Odds and Evens")
console.log(oddsEvens([3, 5, 2, 4]));
console.log(oddsEvens([6, 9, 10, 20])); 

// Task 5: Capitalize


