const fireworkContainer = document.getElementById("firework-container");
const fireworks = new Fireworks(fireworkContainer, {
  autoresize: true,
  opacity: 0.9,
  maxRockets: 40, // Максимальное количество ракет за один запуск
  rocketSpawnInterval: 100, // Интервал появления ракет
  numParticles: 100, // Количество частиц
  particleVelocity: 1, // Скорость частиц
});

// Функция для генерации случайных чисел
function generateRandomNumbers(min, max, count) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(number);
  }
  return numbers;
}

// Обработчик события клика на кнопку
document.getElementById("generate-btn").addEventListener("click", () => {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const prizesCount = parseInt(document.getElementById("prizes").value);

  // Генерация случайных чисел
  const randomNumbers = generateRandomNumbers(min, max, prizesCount);

  // Отображение сгенерированных чисел
  document.getElementById("result").textContent = randomNumbers.join(", ");

  // Задержка перед воспроизведением аудио для победителя
  setTimeout(() => {
    const winnerAudio = new Audio("/s-aplodismentami.mp3"); // Замените ссылку на свой звук
    winnerAudio.play();
  }, 1000); // Задержка в 1000 мс (1 секунда)

  // Сохранение последнего результата в истории
  const history = document.getElementById("history");
  const li = document.createElement("li");
  li.textContent = randomNumbers.join(", ");
  history.appendChild(li);

  // Задержка перед запуском фейерверка
  setTimeout(() => {
    fireworks.start();

    // Остановка фейерверка через 5 секунд
    setTimeout(() => fireworks.stop(), 5000); // Остановка через 5 секунд
  }, 3000);
});
