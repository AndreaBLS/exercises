"use strict";

const isWeekend = (dayGetter) => {
    if (dayGetter === 6 || dayGetter === 0) {
        console.log(`Finally it's weekend :)`)
    } else {
        console.log("Unfortunately this is a weekday, which means tomorrow morning you have to get up!");
    }
}

const day = new Date();
const dayGetterGlob = day.getDay();

isWeekend(dayGetterGlob);