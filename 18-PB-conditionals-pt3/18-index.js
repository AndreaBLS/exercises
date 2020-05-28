"use strict";

// Task 1a
let teamAleeAVG = (89 + 120 + 103) / 3;
let teamLisAVG = (116 + 94 + 123) / 3;
console.log(`Aleeza's team average is ${teamAleeAVG} and Lis's team average is ${teamLisAVG}\n`);

// Task 1b
let highestAvgTeam = null;
if (teamAleeAVG > teamLisAVG) {
    highestAvgTeam = "Aleeza's team has the highest average score in the last 3 games\n";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamAleeAVG}\n`);
} else {
    highestAvgTeam = "Lis's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam}, they had an impressive average of ${teamLisAVG}\n`);
}

// Task 1c
teamAleeAVG = (110 + 115 + 120) / 3;
teamLisAVG = (112 + 108 + 122) / 3;
console.log(`Aleeza's team average is ${teamAleeAVG} and Lis's team average is ${teamLisAVG}`);
if (teamAleeAVG > teamLisAVG) {
    highestAvgTeam = "Aleeza's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamAleeAVG}\n`);
} else if (teamAleeAVG === teamLisAVG) {
    highestAvgTeam = "The two teams had the same average of ";
    console.log(`${highestAvgTeam}${teamLisAVG}, that's a rarely DRAW  situation folks!\n`);
} else {
    highestAvgTeam = "Lis's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamLisAVG}\n`);
}

// Task 1d
let teamMaryAVG = (97 + 134 + 105) / 3;
console.log(`Aleeza's team average is ${teamAleeAVG}, Lis's team average is ${teamLisAVG} and Mary's team average is ${teamMaryAVG}`);
if (teamMaryAVG > teamLisAVG && teamMaryAVG > teamAleeAVG) {
    highestAvgTeam = "Mary's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamMaryAVG}\n`);
} else if (teamLisAVG > teamMaryAVG && teamLisAVG > teamAleeAVG) {
    highestAvgTeam = "Lis's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamLisAVG}\n`);

} else if (teamAleeAVG > teamMaryAVG && teamAleeAVG > teamLisAVG) {
    highestAvgTeam = "Lis's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamAleeAVG}\n`);

} else if (teamAleeAVG === teamMaryAVG === teamLisAVG) {
    highestAvgTeam = "The teams had the same average of ";
    console.log(`${highestAvgTeam}${teamLisAVG}, that's a rarely three sided DRAW  situation folks!`);
}

// Task 1e
teamAleeAVG = (74 + 120 + 107) / 3;
teamLisAVG = (115 + 104 + 98) / 3;
teamMaryAVG = (100 + 127 + 95) / 3;
console.log(`Aleeza's team average is ${teamAleeAVG}, Lis's team average is ${teamLisAVG} and Mary's team average is ${teamMaryAVG}`);
if (teamMaryAVG > teamLisAVG && teamMaryAVG > teamAleeAVG) {
    highestAvgTeam = "Mary's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamMaryAVG}`);
} else if (teamLisAVG > teamMaryAVG && teamLisAVG > teamAleeAVG) {
    highestAvgTeam = "Lis's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamLisAVG}`);

} else if (teamAleeAVG > teamMaryAVG && teamAleeAVG > teamLisAVG) {
    highestAvgTeam = "Lis's team has the highest average score in the last 3 games";
    console.log(`${highestAvgTeam} they had an impressive average of ${teamAleeAVG}`);

} else if (teamAleeAVG === teamMaryAVG === teamLisAVG) {
    highestAvgTeam = "The teams had the same average of ";
    console.log(`${highestAvgTeam}${teamLisAVG}, that's a rarely three sided DRAW  situation folks!`);
}







