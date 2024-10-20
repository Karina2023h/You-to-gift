// fireworks.js

// Функція для запуску анімації феєрверків
function startFireworks() {
  const fireworkContainer = document.getElementById("firework-container");
  fireworkContainer.innerHTML = ""; // Очищення контейнера

  for (let i = 0; i < 5; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.width = Math.random() * 100 + 20 + "px";
    firework.style.height = firework.style.width;
    firework.style.animationDelay = Math.random() * 2 + "s"; // Додавання затримки анімації

    // Додаємо феєрверк до контейнера
    fireworkContainer.appendChild(firework);
    setTimeout(() => {
      firework.remove(); // Видалення феєрверка після анімації
    }, 2000);
  }
}
