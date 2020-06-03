"use strict";

// Task 1
for (let i = 0, mySum = 0; i <= 20; i++) {
    mySum = i + mySum;
    console.log(mySum);
}

// Task 2
for (let i = 1; i < 6; i++) {
    if (i < 2) {
        console.log(`There is ${i} bottle on the wall`);
    } else {
        console.log(`There are ${i} bottles on the wall`);
    }
}

// Task 3
for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// Task 4
for (let i = 0; i < 11; i++) {
    let m = i * 9;
    console.log(`${i} * 9 = ${m} `);
}

// Task 5
for (let i = 1; i < 101; i++) {
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
    } else if ((i % 5) === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else { console.log(i) }
}

// Task 6
for (let i = 1, sum = 0; i < 1000; i++) {
    console.log(i)
    if ((i % 3) === 0 || (i % 5) === 0) {
        sum = i + sum;
        console.log(sum);
    }
}