var link = document.querySelector(".btn-contacts");

var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");

  if (storageName && storageEmail) {
    userName.value = storageName;
    email.value = storageEmail;
    text.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  localStorage.setItem("name", userName.value);
  localStorage.setItem("email", email.value);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});