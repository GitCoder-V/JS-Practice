"use strict";

let center = document.getElementById("centerInp"),
  btn_Area = document.getElementById("btnArea"),
  result_Area = document.getElementById("resultArea"),
  btn_Perimeter = document.getElementById("btnPerimeter"),
  result_Perimeter = document.getElementById("resultPerimeter");

btn_Area.addEventListener("click", function () {
  result_Area.value = Math.pow(+center.value, 2);
});

btn_Perimeter.addEventListener("click", function () {
  result_Perimeter.value = +center.value * 4;
});
