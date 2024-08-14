"use strict";

let radius = document.getElementById("inpRadius"),
  btn_area = document.getElementById("btnArea"),
  resultArea = document.getElementById("resultArea"),
  btn_circumference = document.getElementById("btnCircumference"),
  resultCircumference = document.getElementById("resultCircumference");

btn_area.addEventListener("click", function () {
  resultArea.value = Math.PI * Math.pow(+radius.value, 2);
});
btn_circumference.addEventListener("click", function () {
  resultCircumference.value = 2 * Math.PI * +radius.value;
});
