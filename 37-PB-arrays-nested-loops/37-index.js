"use strict";

// Task 1: Tree

const halfTree = (character, lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < i; j++) {
            array.push(character);
            console.log(array);
        }
    }
}

halfTree("a", 4);

// Task 2: 
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const verticalArrayPrinter = (array) => {
   
    for (let i = 0; i < array.length; i++) {
        console.log(`Row ${i}`);
        for (let j = 0; j < array[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

verticalArrayPrinter(arr);

// Task