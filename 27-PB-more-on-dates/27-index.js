"use strict";

const date = new Date();

const daysLeft = (glob) => {
    const month = glob.getMonth();
    const day = glob.getDate();
    let remainingDays;
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            remainingDays = 31 - day;
            break;
        case 1:
            remainingDay = 28 - day;
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            remainingDays = 30 - day;
            break;
        default:
            console.log("this is no month!");
    }
    console.log(`There are ${remainingDays} days left to the end of the month`);
}

daysLeft(date);