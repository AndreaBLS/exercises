"use strict"

let inputText = document.querySelector("input")
let button = document.querySelector("button")
let h3 = document.querySelector("h3")
let todayDate = new Date()
let toDay = todayDate.getDay()
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let daysLeft = weekDay.indexOf('Saturday') - weekDay.indexOf(weekDay[toDay])

console.log(todayDate)

function handler(event) {
    h3.innerText = `Hello ${inputText.value}. Today is ${weekDay[toDay]}. Only ${daysLeft} days left until weekend`
    inputText.value = ""
}

button.addEventListener("click", handler)

console.log(button)