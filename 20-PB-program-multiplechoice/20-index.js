"use strict";

// Task 1 
let color = "blue";
switch (color) {
    case "red":
        color = "The color is red";
        break;
    case "blue":
        color = "The color is blue";
        break;
    case "green":
        color = "The color is green";
        break;
    case "yellow":
        color = "The color is yellow";
        break;
    default:
        color = "There is no color";
}
console.log(color)

// Task 2
let grade = 1;
switch (grade) {
    case 1:
        grade = "You are a nerd";
        break;
    case 2:
        grade = "Good job";
        break;
    case 3:
        grade = "You could do better";
        break;
    case 4:
        grade = "You suck";
        break;
    default:
        grade = null;
}
console.log(grade)

// Task 3
let fruit = "banana";
switch (fruit) {
    case "banana":
        fruit = "I am a banana";
        break;
    case "mango":
        fruit = "I am a mango";
        break;
    case "apple":
        fruit = "I am an apple";
        break;
    case "strawberry":
        fruit = "I am a strawberry";
        break;
    default:
        fruit = null;
}
console.log(fruit)


let percentageComplete = Math.random() * 100;
if (percentageComplete < 30) {
    console.log("Still a long way to go");
} else if (percentageComplete <= 50) {
    console.log("Slowly getting there");
} else if (percentageComplete <= 80) {
    console.log("You can do it!");
} else if (percentageComplete <= 99) {
    console.log("This is the last push!");
} else {
    console.log("You're there. Well done!");
}

// switch case should be used when facing easy "cases" , if else when we need to complex comparisons etc