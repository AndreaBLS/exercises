"use strict";


// Task 1

const isFourLetters = (array) => {
    const resultArray = [];
    array.forEach((words) => {
        if (words.length === 4) {
            resultArray.push(words)
        }
    })
    return resultArray;
}

console.log("Task 1: Where Have My Four Letter Words Gone?")
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));

// Task 2

const monthName = (number) => {
    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsNames[number - 1];
}

console.log("Task 02: Months");
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

// Task 3
