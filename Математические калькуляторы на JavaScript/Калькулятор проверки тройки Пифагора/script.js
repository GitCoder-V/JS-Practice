"use strict";
window.numberСheck = function () {
  let x = parseFloat(document.getElementById("x").value),
    y = parseFloat(document.getElementById("y").value),
    z = parseFloat(document.getElementById("z").value),
    output = document.querySelector(".output");

  if (x <= 0 || y <= 0 || z <= 0) {
    output.textContent = "Пожалуйста, введите корректные значения.";
    return;
  }

  let resText = "Тройка Пифагора:";
  if (
    Math.pow(x, 2) == Math.pow(y, 2) + Math.pow(z, 2) ||
    Math.pow(y, 2) == Math.pow(x, 2) + Math.pow(z, 2) ||
    Math.pow(z, 2) == Math.pow(x, 2) + Math.pow(y, 2)
  ) {
    resText += " " + "ДА";
  } else {
    resText += " " + "НЕТ";
  }
  output.textContent = resText;
};
