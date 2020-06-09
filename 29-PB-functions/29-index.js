"use strict";

// Task 1
const addUp = (number) => {
    let result = null;
    for (let i = 1; i <= number; i++) {
        result = i + result;
    }
    return result;
}
console.log("Task 1:");
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

// Task 2 
const sumOfCubes = (numberOne, numberTwo, numberThree) => {
    const cubeOne = Math.pow(numberOne, 3),
        cubeTwo = Math.pow(numberTwo, 3),
        cubeThree = Math.pow(numberThree, 3);
    return cubeOne + cubeTwo + cubeThree;
}
console.log("Task 2:");
console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes()); // I get "NaN", should I use an if/else in order to  return "0", in case there are no numbers as inputs?

// Task 3
const dictionary = (string, word) => {
    const startChecker = word.startsWith(string);
    return startChecker;
}
console.log("Task 3:");
console.log(dictionary("bu", "button"));
console.log(dictionary("tri", "triplet"));
console.log(dictionary("beau", "pastry"));

// Task 4
const lessThanOrEqualToZero = (number) => {
    let numberChecker = null;
    if (number <= 0) {
        numberChecker = true;
    } else {
        numberChecker = false;
    }
    return numberChecker;
}
console.log("Task 4:");
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));
/* console.log(lessThanOrEqualToZero(3),lessThanOrEqualToZero(0), lessThanOrEqualToZero(-4), lessThanOrEqualToZero(10));  WHICH ONE LOOKS NICER??*/

// Task 5
const countOccurrences = (string, letter) => {
    const re = new RegExp(letter, "g");
    const count = string.match(re) || [].length;
    return count.length || 0;
}
console.log("Task 5:");
console.log(countOccurrences("this is a string", "i"));
console.log(countOccurrences("andrea", "a"));
console.log(countOccurrences("this is a string", "o"));
