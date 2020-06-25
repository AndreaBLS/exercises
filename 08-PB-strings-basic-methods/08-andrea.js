"use strict mode";

// Task 1
let parkWalk = "I can walk in the park all day!";
console.log("1:" + parkWalk.substring(18, 22));

// Task 2 
let helloWorld = "Hello World";
helloUpper = helloWorld.toUpperCase();
console.log("2:" + helloUpper);

// Task 3 
let helloEarthling = "Hello Earthling";
helloLower = helloEarthling.toLowerCase();
console.log("3:" + helloLower);

// Task 4
let javascript = "JavaScript";
console.log("4:" + javascript.substring(3, 6));

// Task 5 
let chkContain = "nice shoes";
console.log("5:" + chkContain.includes("l", "n"));

// Task 6
let newString = `${javascript[0]}${javascript}${javascript[9]} `;
console.log("6:" + newString);

// Task 7
let newerString = javascript.substring(7, 10) + javascript + javascript.substring(7, 10)
console.log("7:" + newerString);

// Task 8
let newestString = `${javascript[9]}${javascript.substring(1,9)}${javascript[0]}`;
console.log("8:" + newestString);

// Task 9
let firstName = "Andrea";
let city = "Berlin";
let age = "29";
console.log(`9:My name is ${firstName}. I live in ${city} and i am ${age}yrs old`)

// Task 10
let fox = "the quick brown fox";
console.log(`10: ${fox[0].toUpperCase()}${fox.substring(1)}`);