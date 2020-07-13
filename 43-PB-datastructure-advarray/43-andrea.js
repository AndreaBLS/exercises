"use strict";

// Task 1  Get total orders

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

const totalAmount = (array) => {
    const newArray = [];
    for (let key in orders) {
        newArray.push(orders[key].amount);
    };
    const result = newArray.reduce(function (previous, current) {
        return previous + current;
    });
    return result;
}

console.log("Task 1:", totalAmount(orders));


// Task 2 Increment by 1

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const incrementByOne = arrayOfNumbers.map(function (value) {
    return value + 1;
})
console.log("Task 2 :", incrementByOne);


// Task 3 

const filterEvens = (array) => array.filter((value) => value % 2 === 0);

console.log("Task 3:", filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));

// Task 4

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];


const filterFriends = (array, search) => array.filter(function (value) {
    return value.toLowerCase().includes(search.toLowerCase());
})

console.log("Task 4:", filterFriends(friends, 'ka'));
console.log(filterFriends(friends, 'e'));


// Task 5

const sum = (array) => array.reduce((previous, current) => previous + current);

console.log("Task 5:", sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

// Task 6 

const squareRoot = (array) => array.map((value) => Math.sqrt(value));

console.log("Task 6", squareRoot([15, 3, 26, 14, 120]));