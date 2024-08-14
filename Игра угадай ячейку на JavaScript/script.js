"use strict";

let game = document.getElementById("game"),
  btnStart = document.querySelector("button"),
  table = document.createElement("table"),
  clockDisplay = document.getElementById("clock"),
  song1 = document.getElementById("audio1"),
  song2 = document.getElementById("audio2"),
  cellsToGuess = [],
  clickSum = 0,
  gameStarted = false,
  timer;

// Функция для обработки клика игрока по ячейке
function onCellClick(td) {
  if (
    gameStarted &&
    !document.getElementById("cell").classList.contains("guessed")
  ) {
    if (cellsToGuess.includes(+td.textContent)) {
      td.style.backgroundColor = "green";
      td.classList.add("guessed");
      clickSum++;
    } else {
      clockDisplay.append(" " + "Вы промахнулись!");
      song1.play();
    }
    if (clickSum === 10) {
      clearInterval(timer);
      clockDisplay.append(" " + "Вы победили! Все клетки угаданы!");
      table.style.pointerEvents = "none";
      table.style.backgroundColor = "#fff";
      song2.play();
    }
  }
}

// Функция для запуска игры
function startGame() {
  gameStarted = true;
  cellsToGuess = [];
  clickSum = 0;
  table.style.backgroundColor = "#e7e293";
  function selectCell() {
    while (cellsToGuess.length < 10) {
      let numCell = Math.floor(Math.random() * 100) + 1;
      if (!cellsToGuess.includes(numCell)) {
        cellsToGuess.push(numCell);
      }
    }
  }
  selectCell();
  console.log(cellsToGuess);

  // Сброс стилей и классов у ячеек
  let tableCells = document.getElementsByClassName("cell");
  for (let i = 0; i < tableCells.length; i++) {
    tableCells[i].style.backgroundColor = "";
    tableCells[i].classList.remove("guessed");
    table.style.pointerEvents = "auto";
  }

  // Запуск таймера
  let timeLeft = 60; // 2 минуты в секундах
  timer = setInterval(function () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    clockDisplay.innerHTML =
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds;

    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
      clockDisplay.append(" " + "Время вышло! Попробуйте еще раз!");
      table.style.backgroundColor = "#fff";
      gameStarted = false;
      // Действия после завершения таймера
    }
  }, 1000);
}

// Создаем таблицу
let cellNumber = 1;
for (let i = 0; i < 10; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    let td = document.createElement("td");
    td.className = "cell";
    td.id = "cell";
    td.textContent = cellNumber;
    cellNumber++;
    tr.appendChild(td);
    td.onclick = function () {
      onCellClick(td);
    };
  }
  table.appendChild(tr);
}
game.appendChild(table);

// Кнопка "Пуск"
btnStart.onclick = startGame;
