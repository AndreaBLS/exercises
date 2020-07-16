"use strict";

// Task 1

function add(firstNumber) {
    return function sum(secondNumber) {
        return firstNumber + secondNumber;
    }
}

let sum = add(3)(4);
console.log(sum);

// Task 2 

function multiplier(firstNumber) {
    return function multiply(secondNumber) {
        return firstNumber * secondNumber;
    }
}

let myMultiplier = multiplier;
console.log(multiplier(5)(10));

// Task 3

let pensionSavings = (function (currentAge, retirementAge, monthlyWage, savingsPercentage) {
    if (currentAge > retirementAge) {
        return "You're already retired!";
    } else {
        let monthsLeft = (retirementAge - currentAge) * 12,
            savings = monthlyWage * (savingsPercentage / 100);
        return `Your savings for pension are: $${monthsLeft * savings} `;
    }
})(40, 65, 2000, 5);

console.log(pensionSavings);