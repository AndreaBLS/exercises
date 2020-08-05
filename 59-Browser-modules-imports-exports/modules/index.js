// Your code goes here!

import {
    modulo,
    percentage,
    percentageOf,
    difference
} from "./percentage.js"

import {
    fixRoundingErrors,
    calculateAspectRatio
} from "./aspect-ratio.js"

const modulo1 = document.getElementById("modulo_1")
const modulo2 = document.getElementById("modulo_2")
const moduloResult = document.getElementById("modulo_result")

modulo2.addEventListener("keyup", () => {
    let modulo_result = modulo(modulo1.value, modulo2.value)
    moduloResult.value = modulo_result
})

const percentage1 = document.getElementById("percentage_1")
const percentage2 = document.getElementById("percentage_2")
const percentageResult = document.getElementById("percentage_result")

percentage2.addEventListener("keyup", () => {
    let percentage_result = percentage(percentage1.value, percentage2.value)
    percentageResult.value = percentage_result
})

const percentageOf1 = document.getElementById("percentageOf_1")
const percentageOf2 = document.getElementById("percentageOf_2")
const percentageOfResult = (document.getElementById("percentageOf_result"))

percentageOf2.addEventListener("keyup", () => {
    let percentageOf_result = percentage(percentageOf1.value, percentageOf2.value)
    percentageOfResult.value = percentageOf_result

})

const difference1 = document.getElementById("difference_1")
const difference2 = document.getElementById("difference_2")
const differenceResult = document.getElementById("difference_result")

difference2.addEventListener("keyup", () => {
    let difference_result = difference(difference1.value, difference2.value)
    differenceResult.value = difference_result
})

