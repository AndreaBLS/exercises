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
const sumOfCubes = (numberOne = 0, numberTwo = 0, numberThree = 0) => {
    return Math.pow(numberOne, 3) + Math.pow(numberTwo, 3) + Math.pow(numberThree, 3)
}
console.log("Task 2:");
console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());

// Task 3
const dictionary = (string, word) => word.startsWith(string);

console.log("Task 3:");
console.log(dictionary("bu", "button"));
console.log(dictionary("tri", "triplet"));
console.log(dictionary("beau", "pastry"));

// Task 4
const lessThanOrEqualToZero = (number = 0) => {
    if (number <= 0) {
        number = true;
    } else {
        number = false;
    }
    return number;
}
console.log("Task 4:");
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-4));
console.log(lessThanOrEqualToZero(10));

// Task 5
const countOccurrences = (string, letter) => {
    const re = new RegExp(letter, "g"),
        count = string.match(re) || [].length;
    return count.length || 0;
}
console.log("Task 5:");
console.log(countOccurrences("this is a string", "i"));
console.log(countOccurrences("andrea", "a"));
console.log(countOccurrences("this is a string", "o"));

// Task 6 
const calculateBaseToExponent = (baseNumber = 0, exponentNumber = 0) =>
    baseNumber ** exponentNumber;

console.log("Task 6:")
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));
console.log(calculateBaseToExponent(3, 3));

// Task 7

const dogAge = (puppyAge = 0) => {
    const humanYears = 7;
    return `Your doggo is ${puppyAge * humanYears} years old in human years!`
}
console.log("Task 7:");
console.log(dogAge(4));

// Task 8 
const calcSupply = (actualAge = 0, amountPerDay = 0) => {
    const maxAge = 80,
        remainingYears = maxage - actualAge,
        totalAmountNeeded = ((remainingYears * 365) * amountPerDay);
    return `You will need ${totalAmountNeeded} of whatever you want to eat (${amountPerDay} a day) to last till the age of ${maxage} `;
}
console.log("Task 8:");
console.log(calcSupply(25, 2));
console.log(calcSupply(40, 3));

// Task 9 
const isWaldoHere = (string) =>
    string.includes('Waldo') || string.includes('waldo');

console.log("Task 9:");
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));

// Task 10
const equalSlices = (totalSlices, numberRecipients, slicesPerPerson) => numberRecipients * slicesPerPerson <= totalSlices;

console.log("Task 10:")
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// Task 11
const xO = (myString) => {
    let checkForX = 0,
        checkForO = 0,
        myNewString = myString.toLowerCase();
    for (let position = 0; position < myNewString.length; position++) {
        if (myNewString.charAt(position) === "x") {
            checkForX++;
        } else if (myNewString.charAt(position) === "o") {
            checkForO++;
        }
    }
    if (checkForO === checkForX) {
        return true;
    } else {
        return false;
    }
}

console.log("Task 11:");
console.log(xO("ooxx"));
console.log(xO("xooxx"));
console.log(xO("ooxXm"));
console.log(xO("zpzpzpp"));
console.log(xO("zzoo"));

// Task 12