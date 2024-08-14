"use strict";

let btn = document.getElementById("button"),
  answer = document.getElementById("result");

btn.addEventListener("click", function () {
  let inputNumber = parseFloat(document.getElementById("num").value);

  for (let i = 1; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
      answer.textContent += ' ' + i;
    }
  }
});
