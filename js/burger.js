document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const nav = document.getElementById("nav");

  if (burgerMenu && nav) {
    burgerMenu.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  } else {
    console.error('Элемент с id "burger-menu" или "nav" не найден');
  }
});
