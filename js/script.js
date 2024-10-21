let historyList = []; // Хранит историю выбранных чисел

document.getElementById("generate-btn").addEventListener("click", function () {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const prizes = parseInt(document.getElementById("prizes").value);

  const results = [];
  while (results.length < prizes) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!results.includes(randomNum)) {
      results.push(randomNum);
    }
  }

  displayRapidResults(results[0]); // Передаем первое призовое число
  updateHistory(results);
});

// Функция для быстрого отображения результатов
function displayRapidResults(finalNumber) {
  const resultText = document.getElementById("result");
  let interval;
  let counter = 0;

  interval = setInterval(() => {
    const randomNum =
      Math.floor(
        Math.random() *
          (parseInt(document.getElementById("max").value) -
            parseInt(document.getElementById("min").value) +
            1)
      ) + parseInt(document.getElementById("min").value);

    resultText.textContent = randomNum;

    counter++;
    if (counter > 20) {
      clearInterval(interval);

      // Задержка перед выбором финального числа
      setTimeout(() => {
        displayChosenNumber(finalNumber); // Показываем уже выбранное число
      }, 500);
    }
  }, 100); // Изменяем число каждые 100 мс
}

// Функция для отображения выбранного числа
function displayChosenNumber(chosenNumber) {
  const resultText = document.getElementById("result");
  resultText.textContent = `${chosenNumber}`; // Отображаем выбранное число

  // Воспроизводим звук аплодисментов
  const applause = new Audio("https://www.soundjay.com/human/applause-8.mp3");
  applause.play();
}

// Функция для обновления истории результатов
function updateHistory(results) {
  const history = document.getElementById("history");
  historyList.push(results[0]); // Добавляем первое число из результатов
  if (historyList.length > 5) {
    historyList = historyList.slice(-5);
  }

  history.innerHTML = "";
  historyList.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    history.appendChild(li);
  });
}
