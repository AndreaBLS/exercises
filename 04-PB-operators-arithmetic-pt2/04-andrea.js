// **Basic Arithmetic Problems**
// Q1
let proceedsOneNight = 6450;
let ticketCost = 15;
let ticketsSold = proceedsOneNight / ticketCost;
console.log(ticketsSold);

// Q2
let weeklyIncome = 500;
let yearlyWeeks = 52.143;
let yearlyIncome = weeklyIncome * yearlyWeeks;
console.log(yearlyIncome)

// **Percentage**
// Q3
console.log((17 / 30) * 100 + "%")

// **Geometry Formulas**
// Q4
let sideSquare = 4.75;
let perimeterSquare = sideSquare * 4;
console.log(perimeterSquare)

// Q5
let sideTriangleA = 5;
let sideTriangleB = 6;
let sideTriangleC = 7;
let perimeterTriangle = (sideTriangleA + sideTriangleB + sideTriangleC);
console.log(perimeterTriangle);

// Q6
console.log(4.75 * 4.75 + " cm2")

// Q7
let side1 = 5;
let side2 = 6;
let side3 = 7;
let perimeter = (side1 + side2 + side3) / 2;
let area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
console.log(area + " cm2");

// Q8
let cubeSides = 9
let cubeVolume = cubeSides * cubeSides * cubeSides;
console.log(cubeVolume + " cm3")

// **Consumer Formula**
// Q9
console.log("First bill is:", 22.35 + (22.35 / 10), "€");
console.log("Second bill is:", 26.67 + ((15 / 100) * 26.67), "€");
console.log("Third bill is:", 35.92 + ((20 * 35.92) / 100), "€");

// **Average** 
// Q10
let avgHoursWorked = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log("Noemy's average working hours per day  was " + avgHoursWorked, "h")

// Q11

console.log("Score in the sixth test: ", (85 * 6 - (75 + 70 + 85 + 90 + 100)));

// Q12

let neededAverage = 80 * 9;
let actualAverage = 78 * 8;
let finalAverage = neededAverage - actualAverage;
console.log("James needs a minimum of ", finalAverage, "% to get an 80% average.")