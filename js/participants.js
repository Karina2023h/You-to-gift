// participants.js

// Перегляд учасників
function viewParticipants() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    window.location.href = "participants.html"; // Перенаправлення на сторінку учасників
  } else {
    alert("Будь ласка, увійдіть у систему, щоб переглянути учасників.");
  }
}
