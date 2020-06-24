"use strict";

// Task 1: Tree

const halfTree = (character, lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < i; j++) {
            array.push(character);
            console.log(array.join(" "));
        }
    }
}
console.log("Task 1: Tree");
halfTree("*", 4);


/* MARTINA'S SOLUTIONS 

// build a half pyramid with return
const halfPyramid = (lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j <= i; j++) {
            array.push("*"); // the amount of stars per line
            console.log(array);
        }
        array.push("\n"); // insert a new line break special character
    }
    return " " + array.join(" ");
}
console.log("Task 1: Pyramid");
console.log(halfPyramid(4));
// mohameds number pyramid
function mohamedsPyramid(lines) {
    let string = '';
    for (let i = 0; i < lines; i++) { // forwards
        for (let j = i; j >= 0; j--) { // backwards accordingly to i
            string += j + " ";
        }
        string += "\n"; // new line break
        //console.log(string);
    }
    return string;
}
console.log(mohamedsPyramid(10)); */

// Task 2: 
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const verticalArrayPrinter = (array) => {

    for (let i = 0; i < array.length; i++) {
        console.log(`Row ${i}`);
        for (let j = 0; j < array[i].length; j++) {
            console.log(" " + array[i][j]);
        }
    }
}
verticalArrayPrinter(arr);

// Task 3 
