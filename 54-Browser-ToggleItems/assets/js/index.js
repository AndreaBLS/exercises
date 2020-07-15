"use strict";

let ul = document.querySelector("ul")
let button = document.querySelector("button")

button.addEventListener("click", (e) => {
    ul.classList.toggle("hide")

    button.innerText = ul.classList.contains("hide") ? "Show Destinations" : "Hide Destinations"
})
