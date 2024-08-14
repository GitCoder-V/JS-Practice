"use strict";

let firstValue = document.getElementById("x"),
  secondValue = document.getElementById("y"),
  btn = document.querySelector("button"),
  answer = document.getElementById("output");

btn.addEventListener("click", function () {
  if (firstValue.value <= 0 || secondValue.value <= 0) {
    answer.textContent = "Введите корректное значение.";
  } else {
    answer.textContent = "Ответ:" + ' ' + firstValue.value * secondValue.value;
  }
});
