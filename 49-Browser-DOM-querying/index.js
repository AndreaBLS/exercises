"use strict";

let body = document.querySelector("body");
let title = document.querySelector(".title");
let menuHeadings = document.getElementsByClassName("category");
let foodCategory = document.getElementsByClassName("food-category");
let main = document.querySelector("main");
let warning = document.getElementById("warning");
let listItem = document.querySelectorAll(".food-item");

// body
body.style.cssText = "font-family: Arial, Helvetica, sans-serif;";
// h1
title.style.cssText = "text-align: center;";

// menuHeadings
for (let i = 0; i < menuHeadings.length; i++) {
    menuHeadings[i].style.fontSize = "30px";
    menuHeadings[i].style.fontStyle = "italic";
    menuHeadings[i].style.textDecoration = "underline";
}
// 
const colorGenerator = (array) => {
    return array.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

colorGenerator(foodCategory[0]);
colorGenerator(foodCategory[1]);
colorGenerator(foodCategory[2]);

// main 

main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.width = "100%";
main.style.margin = "auto";

for (let child of foodCategory) {
    child.style.MarginBottom = '20px';
    child.style.height = '200px';
    child.style.width = '30%';
    child.style.margin = '10px auto';
    child.style.paddingTop = '15px';
}

warning.style.fontSize = "1.5rem";
warning.style.textAlign = "center";

