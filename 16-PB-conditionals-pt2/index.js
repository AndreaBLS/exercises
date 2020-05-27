"use strict";

function BMIcalc(mass, height) {
    let bmi;
    bmi = mass / (height * height)
    return bmi;
}

let andrea = { firstName: "Andrea", mass: 72, age: 29, height: 1.75 };
let willy = { firstName: "Willy", mass: 85, age: 30, height: 1.69 };

let andreaBMI = BMIcalc(andrea.mass, andrea.height);
let willyBMI = BMIcalc(willy.mass, willy.height);

let higherBMI;
if (willyBMI > andreaBMI) {
    higherBMI = true;
} else {
    higherBMI = false;
}

console.log("Is Willy's BMI higher than Andrea's ?")
console.log(higherBMI ? "Yes Willy has a higher BMI than Andrea at the moment" : "not it is not")

let message = {
    higherBMI: "Has the higher BMI"
}

if (willyBMI > andreaBMI) {
    console.log(willy.firstName, message.higherBMI);
} else {
    console.log(andrea.firstName, message.higherBMI);
}


/* i started doing that and i felt like a Neanderthal.. so i checked how to write the calculation once 

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