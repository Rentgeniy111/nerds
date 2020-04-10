var popup = document.querySelector(".modal-sendmail");
if (popup) {
var openFormPopup = document.querySelector(".contacts-button");
var popupClose = popup.querySelector(".modal_close");
var form = popup.querySelector(".sendmail-form");
var nameField = popup.querySelector("[name=name-field]");
var emailField = popup.querySelector("[name=email-field]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

openFormPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  nameField.focus();
  if (storage) {
    nameField.value = storage;
  }
});

popupClose.addEventListener("click", function(evt) { 
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameField", nameField.value);
    }  
  }
})
}