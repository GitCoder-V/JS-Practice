"use strict";

let sideA = document.getElementById("a"),
  sideB = document.getElementById("b"),
  sideC = document.getElementById("c"),
  btn = document.getElementById("btn"),
  perimeter = document.getElementById("perimeter"),
  semiperimeter = document.getElementById("semiperimeter"),
  area = document.getElementById("area");

btn.addEventListener("click", function () {
  perimeter.textContent = +sideA.value + +sideB.value + +sideC.value;
  semiperimeter.textContent = (+sideA.value + +sideB.value + +sideC.value) / 2;
  area.textContent = Math.sqrt(semiperimeter.textContent * (semiperimeter.textContent - +sideA.value) * (semiperimeter.textContent - +sideB.value) * (semiperimeter.textContent - +sideC.value));
});
