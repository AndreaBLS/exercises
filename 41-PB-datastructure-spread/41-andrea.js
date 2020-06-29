"use strict";

// Task 1 Combining Arrays

let euroCountries = ["Italy", "France", "Germany"];
let asianCountries = ["China", "Japan", "India"];
euroCountries.push(...asianCountries);
console.log("Task 1 Combining Arrays  ", euroCountries);

let euroCountriesTwo = ["Italy", "France", "Germany"];
let asianCountriesTwo = ["China", "Japan", "India"];

let worldCountries = [...euroCountriesTwo, ...asianCountries];
console.log("Task 1.2 Combining Arrays ", worldCountries)
    ;

// Task 2 Copying Arrays 

let randomArray = ["random", "text", "here"];
let copiedArray = [...randomArray];

console.log("Task 2 Copying Arrays", copiedArray);

// Task 3 Find the Largest..

