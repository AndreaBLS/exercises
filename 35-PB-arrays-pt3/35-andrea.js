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

const amplify = () => {

}

// Task 4 

/* MARTINA's SOLUTION
    function unique(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        } else {
            console.log("We found a double!" + array[i]);
        }
    }
}
console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0
console.log(unique([1, 1, 1, 1, 1, 1, 1, 0])); // ➞ 0
 */

// Task 5: Word Ranking


/* const wordRank = (string) => {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    for (let i = 0; i < string.length; i++) {

    }
}

console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday.")); */


// Task 6: c4n y0u r34d th15?

const hackerSpeak = (string) => {
    let arr = string.split("");
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
                arr[i] = "4";
                break;
            case "e":
                arr[i] = "3";
                break;
            case "i":
                arr[i] = "1";
                break;
            case "o":
                arr[i] = "0";
                break;
            case "s":
                arr[i] = "5";
        }
    }    return arr.join("");
};
console.log("Task 6: c4n y0u r34d th15?");
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));

/* function hackerSpeak2(string) {
    let newString = string; // copy to the string for output
    //const regexA = /a/gi;
    //console.log(typeof regexA);
    newString = newString.replace(/a/gi, 4)
                        .replace(/e/gi, 3)
                        .replace(/i/gi, 1)
                        .replace(/o/gi, 0)
                        .replace(/s/gi, 5);
    return newString;
}
console.log(hackerSpeak2("javascript is cool"));
console.log(hackerSpeak2("programming is fun"));
console.log(hackerSpeak2("become a coder"));
 */

