"use strict";

// Task 1 Check if a number is within a given range

const withingRange = (number, object) => {
    return number >= object.min && number <= object.max;
}

console.log("Task 1: ", withingRange(4, {
    min: 0,
    max: 5
}));
console.log("Task 1: ", withingRange(4, {
    min: 4,
    max: 5
}));
console.log("Task 1: ", withingRange(4, {
    min: 6,
    max: 10
}));
console.log("Task 1: ", withingRange(5, {
    min: 5,
    max: 5
}));

// Task 2 Scrabble

const scrabbleArray = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];

const scrabble = (array) => {
    let result = 0;
    for (let item of array) {
        result += item.score;
    } return result;
};

console.log("Task 2 :", scrabble(scrabbleArray));

// Task 3 Is it an empty object?

const isItEmpty = object => Object.entries(object).length === 0 ? true : false;

console.log("Task 3 ", isItEmpty({}));
console.log("Task 3 ", isItEmpty({ a: 1 }));

// Task 4: Counting Letters

const countingLetters = (str) => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = str.split(str[i]).length - 1;
    }
    return obj
};

console.log("Task 4", countingLetters('tree'));

// Task 5: Free Shipping