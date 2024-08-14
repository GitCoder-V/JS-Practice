"use strict";

let keys = document.querySelectorAll("#key");
let inputField = document.getElementById("text-field");
for (let key of keys) {
  key.addEventListener("click", function () {
    inputField.value += key.textContent;
  });
}

let backSpace = document.getElementById("keyBackSpace");
backSpace.addEventListener("click", function () {
  let value = inputField.value;
  // Удаляем последний символ
  inputField.value = value.substring(0, value.length - 1);
});

let tab = document.getElementById("keyTab");
tab.addEventListener("click", function () {
  inputField.value += "\t";
});

let enter = document.getElementById("keyEnter");
enter.addEventListener("click", function () {
  inputField.value += "\n";
});

let spaceBtn = document.getElementById("keySpace");
spaceBtn.addEventListener("click", function () {
  inputField.value += " ";
});

let cleanBtn = document.getElementById("keyClean");
cleanBtn.addEventListener("click", function () {
  inputField.value = "";
});

let selectAlltextBtn = document.getElementById("keySelectAlltext");
selectAlltextBtn.addEventListener("click", function () {
  inputField.select();
});

let btnEn = document.getElementById("toggleLanguageBtn");
let btns = document.querySelectorAll("#key");
for (let btn of btns) {
  btn.textContent = btn.dataset.ru;
  btnEn.textContent = "EN";
}

btnEn.addEventListener("click", function () {
  for (let btn of btns) {
    if (btn.textContent === btn.dataset.ru) {
      btn.textContent = btn.dataset.en;
      btnEn.textContent = "RU";
    } else {
      btn.textContent = btn.dataset.ru;
      btnEn.textContent = "EN";
    }
  }
});

let capsLockActive = false;
function toggleCapsLock() {
  capsLockActive = !capsLockActive;
  for (let button of btns) {
    if (capsLockActive) {
      button.textContent = button.textContent.toUpperCase();
    } else {
      button.textContent = button.textContent.toLowerCase();
    }
  }
}

let keyscapsLock = document.querySelectorAll("#keyCapsLock");
for (let capsLock of keyscapsLock) {
  capsLock.addEventListener("click", function () {
    toggleCapsLock();
    if (btnEn.textContent === "EN") {
      updateRuKeyboardLayout();
    }
    if (btnEn.textContent === "RU") {
      updateEnKeyboardLayout();
    }
  });
}

function updateRuKeyboardLayout() {
  let keyboardButtons = document.querySelectorAll("#key");
  keyboardButtons.forEach((button) => {
    if (capsLockActive) {
      switch (button.textContent) {
        case button.dataset.ru:
          button.textContent = button.dataset.ru1;
          break;
      }
    } else {
      switch (button.textContent) {
        case button.dataset.ru1:
          button.textContent = button.dataset.ru;
          break;
      }
    }
  });
}

function updateEnKeyboardLayout() {
  let keyboardButtons = document.querySelectorAll("#key");
  keyboardButtons.forEach((button) => {
    if (capsLockActive) {
      switch (button.textContent) {
        case button.dataset.en:
          button.textContent = button.dataset.en1;
          break;
      }
    } else {
      switch (button.textContent) {
        case button.dataset.en1:
          button.textContent = button.dataset.en;
          break;
      }
    }
  });
}

let allButtons = document.querySelectorAll("button");
let audio = new Audio(
  "audio/computer-keyboard-button-press-release_m1pp3tnd.mp3"
);
allButtons.forEach((button) => {
  button.addEventListener("click", function () {
    audio.play();
  });
});
