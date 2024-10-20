// Відкриття модального вікна при натисканні на кнопку "Авторизація"
document.getElementById("login-btn").onclick = function () {
  document.getElementById("auth-modal").style.display = "block";
  document.getElementById("modal-title").innerText = "Увійти";
  document.getElementById("auth-message").innerText = ""; // Очищуємо повідомлення про помилки
};

// Закриття модального вікна при натисканні на кнопку "Закрити" (хрестик)
document.getElementById("close-modal").onclick = function () {
  document.getElementById("auth-modal").style.display = "none";
};

// Авторизація користувача
document.getElementById("submit-auth-btn").onclick = function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email && password) {
    const users = JSON.parse(localStorage.getItem("users")) || {};

    // Перевіряємо, чи користувач існує і чи співпадає пароль
    if (users[email] && users[email].password === password) {
      localStorage.setItem("loggedInUser", email);
      alert("Увійшли успішно!");
      window.location.reload(); // Перезавантажуємо сторінку для відображення змін
    } else {
      document.getElementById("auth-message").innerText =
        "Невірна електронна пошта або пароль.";
    }
  } else {
    document.getElementById("auth-message").innerText =
      "Будь ласка, заповніть всі поля.";
  }
};

// Вихід з системи
document.getElementById("logout-btn").onclick = function () {
  localStorage.removeItem("loggedInUser");
  alert("Ви вийшли з системи.");
  window.location.reload(); // Перезавантажуємо сторінку для відображення змін
};

// Відображення статусу користувача (чи увійшов в систему)
const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
  document.getElementById("logged-in-user").innerText = loggedInUser;
  document.getElementById("login-btn").style.display = "none"; // Ховаємо кнопку "Авторизація"
  document.getElementById("logout-btn").style.display = "inline"; // Показуємо кнопку "Вийти"
}
