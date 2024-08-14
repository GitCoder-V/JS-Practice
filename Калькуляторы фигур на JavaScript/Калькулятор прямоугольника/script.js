"use strict";

let sideA = document.getElementById("inpSideA"),
  sideB = document.getElementById("inpSideB"),
  btn_Area = document.getElementById("btnArea"),
  result_Area = document.getElementById("resultArea"),
  btn_Perimeter = document.getElementById("btnPerimeter"),
  result_Perimeter = document.getElementById("resultPerimeter");

btn_Area.addEventListener("click", function () {
  result_Area.value = +sideA.value * +sideB.value;
});
btn_Perimeter.addEventListener("click", function () {
  result_Perimeter.value = 2 * (+sideA.value + +sideB.value);
});
