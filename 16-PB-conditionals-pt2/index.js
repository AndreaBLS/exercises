/* # Programming Basics: Conditionals Part 2

Andrea & Willy are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65). */

"use strict";

function BMIcalc(mass, height) {
    let bmi;
    bmi = mass / (height * height);
    return bmi;
}

// 1. Store Mark's and John's mass and height in variables.
let andrea = { firstName: "Andrea", mass: 72, age: 29, height: 1.75 };
let willy = { firstName: "Willy", mass: 85, age: 30, height: 1.69 };

// 2. Calculate both their BMIs and store their BMIs in variables. 
let andreaBMI = BMIcalc(andrea.mass, andrea.height);
let willyBMI = BMIcalc(willy.mass, willy.height);
console.log(`${andrea.firstName}'s BMI is ${andreaBMI} and ${willy.firstName}'s BMI is ${willyBMI}`);

// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let higherBMI;
if (willyBMI > andreaBMI) {
    higherBMI = true;
    //    4. Print a string to the console containing the variable from step 3 using string interpolation. 
    console.log(`\nIs ${willy.firstName}s BMI higher than ${andrea.firstName}'s? ${higherBMI}\n`);
} else {
    higherBMI = false;
    console.log(`Is ${willy.firstName}s BMI higher than ${andrea.firstName}'s? ${higherBMI}`);
}

let message = {
    higherBMI: "Has the higher BMI"
}
// 5. Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if (willyBMI > andreaBMI) {
    console.log(willy.firstName, message.higherBMI);
} else {
    console.log(andrea.firstName, message.higherBMI);
}





/* i started doing that and i felt like a Neanderthal.. so i searched how to write the calculation once

let andreasHeight = 1.75;
let andreasWeight = 71.8;
let andreasBMI = andreasWeight / ( andreasHeight * andreasHeight);

let johnsHeight = 1.85;
let johnWeight = 90;
let johnsBMI = johnWeight / (johnsHeight * johnsHeight);

console.log(andreasBMI, johnsBMI)

let
if (andreasBMI > johnsBMI) {
    let
}
*/