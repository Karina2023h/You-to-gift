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

  displayRapidResults(results); // Передаем массив призовых чисел
  updateHistory(results);
});

// Функція для швидкого відображення результатів
function displayRapidResults(results) {
  const resultText = document.getElementById("result");
  let interval;
  let counter = 0;

  const generateRandomNum = () => {
    return (
      Math.floor(
        Math.random() *
          (parseInt(document.getElementById("max").value) -
            parseInt(document.getElementById("min").value) +
            1)
      ) + parseInt(document.getElementById("min").value)
    );
  };

  interval = setInterval(() => {
    const randomNum = generateRandomNum();
    resultText.textContent = randomNum;

    counter++;
    if (counter > 20) {
      clearInterval(interval);

      // Затримка перед вибором фінальних чисел
      setTimeout(() => {
        displayChosenNumbers(results); // Показываем уже выбранные числа
      }, 500);
    }
  }, 100); // Изменяем число каждые 100 мс
}

// Функція для відображення вибраних чисел
function displayChosenNumbers(chosenNumbers) {
  const resultText = document.getElementById("result");
  const resultBox = document.getElementById("result-box");

  // Применяем класс fade-out для исчезновения текста
  resultText.classList.add("fade-out");

  // Відтворення звуку аплодисментів
  const applause = new Audio("https://www.soundjay.com/human/applause-8.mp3");
  applause.play();

  // Затримка перед відображенням вибраних чисел
  setTimeout(() => {
    // Відображаємо вибрані числа
    resultText.textContent = ` ${chosenNumbers.join(", ")}`; // Відображаємо вибрані числа
    resultBox.classList.add("background-winner"); // Додаємо клас для зміни фону

    // Повернення до початкового фону через 3 секунди
    setTimeout(() => {
      resultBox.classList.remove("background-winner"); // Убираем класс
      resultText.classList.remove("fade-out"); // Убираем класс исчезновения
      resultText.textContent = ""; // Очищаем текст
    }, 3000); // 3000 мс (3 секунди)
  }, 500); // Затримка перед відображенням вибраних чисел
}

// Функція для оновлення історії результатів
function updateHistory(results) {
  const history = document.getElementById("history");
  historyList.push(...results); // Додаємо всі призові числа в історію
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
