"use strict";
window.solveQuadratic = function () {
  let a = parseFloat(document.getElementById("a").value),
    b = parseFloat(document.getElementById("b").value),
    c = parseFloat(document.getElementById("c").value),
    answer = document.getElementById("output");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    answer.textContent = "Пожалуйста, введите корректные значения.";
    return;
  }

  if (a === 0) {
    answer.textContent = "Это не квадратное уравнение (a = 0).";
    return;
  }

  let D = b * b - 4 * a * c;
  let resultText = `Дискриминант: ${D}. `;

  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    resultText += `У уравнения два корня: x1 = ${x1}, x2 = ${x2}`;
  } else if (D === 0) {
    const x = -b / (2 * a);
    resultText += `У уравнения один корень: x = ${x}`;
  } else {
    resultText += "У уравнения нет действительных корней.";
  }
  
  answer.textContent = resultText;
};
