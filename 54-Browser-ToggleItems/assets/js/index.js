"use strict";

let ul = document.querySelector("ul")
let button = document.querySelector("button")

button.addEventListener("click", (e) => {
    ul.classList.toggle("hide")

    button.innerText = ul.classList.contains("hide") ? "Show Destinations" : "Hide Destinations"
})

const selectedDestination = document.querySelectorAll("li")

let callbackSelect = (event) => {
    console.dir(event.target)
    console.log(event.target)
    const selected = document.querySelector(".active")
    selected.classList.remove("active")
    event.target.classList.add("active")
}

selectedDestination.forEach(destination => {
    selectedDestination.addEventListener("click", callbackSelect)
})