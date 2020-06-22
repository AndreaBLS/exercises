"use strict";

// Task 1

const findGreatest = ([], number) => {

}





// Task 4 

const findVowels = (string) => {
    const vowels = str.match(/[aeiou]/gi);
    return vowels;
}

console.log("Task 04: AEIOU: Vowels");
console.log(findVowels("this is a string"));


// Task 5



// Task 6

const sumOfCubes = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Math.pow(number[i], 3);
    }
    return sum;
}

console.log("Task 06: Cubed");
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([0]));

// Task 7 


