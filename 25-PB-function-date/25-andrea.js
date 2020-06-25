"use strict";

const bookable = (todayDate, futureDate) => {
    if (todayDate < futureDate) {
        console.log(`Your booking to the event for ${futureDate} is already guaranteed!`);
    } else {
        console.log(`In order to book, you need to select a future date.`);
    }
}

const todayDate = new Date();
const futureDate = new Date("April 25 2021");
bookable(todayDate, futureDate);