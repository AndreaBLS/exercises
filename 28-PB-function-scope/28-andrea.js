"use strict";

// Task 1
const exp = (x, y) => {
    if ((typeof x === "number") && (typeof y === "number")) {
        let result = null;
        for (let i = 1; i <= y; i++) {
            result = x ** i;
            console.log(result);
        }
    } else {
        console.log("they are not numbers");
    }
}
exp(2, 5);

// Task 2
let favoriteFruit = "Mango";
const printFavoriteFruit = (a) => {
    favoriteFruit = "Banana";
    console.log(`My favourite fruit is ${favoriteFruit}`);
}
printFavoriteFruit(favoriteFruit);

// Task 3

const exponent = (x, y) => {
    if ((typeof x === "number") && (typeof y === "number")) {
        let result = x ** y;
        console.log(result);
    } else {
        console.log("they are not numbers");
    }
}
exponent(2, 4);

// Not possible as the var "result" only exists inside the function