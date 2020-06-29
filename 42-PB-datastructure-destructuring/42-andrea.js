"use strict"

// Task 1 : Array Destructuring

let fruit,
    vegetable,
    food;

[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log("Task 1 Fruits:", fruit, "Vegetables:", vegetable, "Foods:", food);

// Task 2 Object Destructuring

const mykeyPairValues = {
    Johnny: 'cat',
    Walker: 'dog'
};
let Johnny, Walker
({
    Johnny,
    Walker
} = mykeyPairValues)

console.log(Johnny);
console.log(Walker);

// Task 3 

let name, nationality, genre, greatestHit;
({
    name, nationality, genre, greatestHit
} = {
    name: "Wardruna",
    nationality: "Norwegian",
    genre: "folk music",
    greatestHit: "x"
});

console.log(`${name} is a ${nationality} band. They make ${genre} and their greatest hit is ${greatestHit}`);