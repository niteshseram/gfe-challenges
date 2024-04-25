const nameField = document.getElementById("name");
const nameError = document.getElementById("name-error");

const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

const messageField = document.getElementById("message");
const messageError = document.getElementById("message-error");

const charCountValue = document.getElementById("char-count-value");
const charCountLabel = document.getElementById("char-label");
const form = document.getElementById("form");
const confirmation = document.getElementById("confirmation");

function onMessageChange() {
  const valueLength = messageField.value.length;

  charCountValue.innerHTML = valueLength;

  if (valueLength > 500) {
    charCountLabel.classList.add("char-count-exceed");
    messageField.classList.add("error-input-field");
  } else {
    charCountLabel.classList.remove("char-count-exceed");
    messageField.classList.remove("error-input-field");
  }
}

// Name validation
nameField.addEventListener("invalid", function () {
  nameError.style.display = "block";
});

nameField.addEventListener("input", function () {
  if (this.validity.valid) {
    nameError.style.display = "none";
  }
});

// Email validation
emailField.addEventListener("invalid", function () {
  emailError.style.display = "block";
  if (this.validity.valueMissing) {
    emailError.textContent = "Email address is required";
  } else if (this.validity.typeMismatch) {
    emailError.textContent = "Please enter valid email address";
  }
});
emailField.addEventListener("input", function () {
  if (this.validity.valid) {
    emailError.style.display = "none";
  }
});

// Message validation
messageField.addEventListener("invalid", function () {
  messageError.style.display = "block";
});
messageField.addEventListener("input", function () {
  if (this.validity.valid) {
    messageError.style.display = "none";
  }
});

function onSubmit(event) {
  event.preventDefault();

  form.style.display = "none";
  confirmation.style.display = "flex";

  //clear all the values after submit
  nameField.value = "";
  emailField.value = "";
  messageField.value = "";
  charCountValue.textContent = 0;
}

function onSendAnotherMessage() {
  form.style.display = "flex";
  confirmation.style.display = "none";
}
