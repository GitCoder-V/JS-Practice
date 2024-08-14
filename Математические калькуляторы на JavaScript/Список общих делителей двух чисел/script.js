"use strict";
let btn = document.getElementById("button");

btn.addEventListener("click", function () {
  let inpA = parseFloat(document.getElementById("a").value),
    inpB = parseFloat(document.getElementById("b").value),
    answer = document.getElementById("output");
  let values = [];
  function cucle(num) {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        values.push(i);
      }
    }
    return values;
  }
  cucle(inpA);
  cucle(inpB);

  let duplicates = values.filter((item, index, arr) => {
    return arr.indexOf(item) !== index;
  });
  answer.textContent = duplicates;
});