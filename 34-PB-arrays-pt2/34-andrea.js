"use strict";

// Task 1 : The Greater Numbers

const findGreatest = (array, number) => {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) {
            result = result + array[i] + ' ';
        }
    }
    return result;
}
console.log("Task 1 : The Greater Numbers");
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// Task 2 : For the longest word

const longestWord = (string) => {
    let array = string.split(" "),
        longest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    } return longest;
}
console.log("Task 2 : For the longest word");
console.log(longestWord('this is a web development course'));

// Task 3

const reverse = (numbers)


console.log(reverse(34532));

// Task 4 

 const findVowels = (string) => {
    const vowels = string.match(/[aeiou]/gi);
    return vowels.length;
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


