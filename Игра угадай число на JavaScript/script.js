"use sctrict";

window.guessNumber = function () {
  let box = document.querySelector(".calculator"),
    inpAnswer = document.getElementById("valueInp"),
    resultAnswer = document.getElementById("output"),
    btnTest = document.querySelector(".button"),
    song1 = document.getElementById("audio1"),
    song2 = document.getElementById("audio2");

  inpAnswer.value = "";
  resultAnswer.textContent = "";
  box.style.borderColor = "red";

  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(secretNumber);

  btnTest.addEventListener("click", function () {
    if (+inpAnswer.value === secretNumber) {
      box.style.borderColor = "green";
      resultAnswer.textContent =
        "Поздравляю, вы угадали! Это число:" + " " + inpAnswer.value;
      song1.play();
    } else if (+inpAnswer.value < secretNumber) {
      song2.play();
      resultAnswer.textContent = "Введите число поБольше";
    } else {
      song2.play();
      resultAnswer.textContent = "Введите число поМеньше";
    }
  });
};
