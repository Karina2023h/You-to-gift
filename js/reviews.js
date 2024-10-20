// Функція для збереження відгуків у Local Storage
function saveReviews(reviews) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

// Функція для завантаження відгуків з Local Storage
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews"));
  if (reviews) {
    reviews.forEach((review) => {
      addReviewToList(review);
    });
  }
}

// Функція для додавання відгуку до списку
function addReviewToList(reviewText) {
  const li = document.createElement("li");
  li.textContent = reviewText;

  // Додаємо кнопку для видалення
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "✖"; // Хрестик
  deleteButton.className = "delete-button";
  deleteButton.onclick = function () {
    removeReview(reviewText);
  };

  li.appendChild(deleteButton);
  document.getElementById("review-list").appendChild(li);
}

// Функція для видалення відгуку
function removeReview(reviewText) {
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews = reviews.filter((review) => review !== reviewText);
  saveReviews(reviews);

  // Оновлюємо список відгуків
  document.getElementById("review-list").innerHTML = "";
  loadReviews();
}

// Завантажуємо відгуки при завантаженні сторінки
loadReviews();

// Додаємо обробник події для форми
document
  .getElementById("review-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку

    const reviewText = document.getElementById("review-text").value;
    if (reviewText) {
      // Отримуємо наявні відгуки з Local Storage
      const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

      // Додаємо новий відгук до масиву
      reviews.push(reviewText);

      // Зберігаємо оновлений масив у Local Storage
      saveReviews(reviews);

      // Додаємо новий відгук до списку на сторінці
      addReviewToList(reviewText);

      // Очищаємо поле вводу
      document.getElementById("review-text").value = "";
    }
  });
