// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const emailField = document.getElementById("email");
const emailError = document.getElementById("emailError");

const toast = document.getElementById("toaster");

const form = document.getElementById("form");

emailField.addEventListener("input", function () {
  if (this.validity.valid) {
    emailError.style.display = "none";
    emailField.classList.remove("input__field--error");
  } else if (this.validity.typeMismatch) {
    emailError.style.display = "block";
    emailError.textContent = "Please enter valid email address.";
    emailField.classList.add("input__field--error");
  } else if (this.validity.valueMissing) {
    emailError.style.display = "block";
    emailError.textContent = "Email address is required";
    emailField.classList.add("input__field--error");
  }
});

function onSubmit(event) {
  event.preventDefault();

  //clear all the values after submit
  emailField.value = "";
  toast.style.display = "flex";

  const toastContent = toast.firstElementChild;
  const toastContentBadge = toastContent.firstElementChild;
  const toastContentMessage = toastContent.lastElementChild;

  const success = true;

  if (success) {
    toastContent.classList.add("toast__success");
    toastContentBadge.innerText = "Success";
    toastContentMessage.innerText =
      "Subscription successful! Please check your email to confirm.";
  } else {
    toastContent.classList.add("toast__error__content");
    toastContentBadge.classList.add("toast__error__badge");
    toastContentBadge.innerText = "Error";
    toastContentMessage.innerText =
      "Failed to subscribe. Please ensure your email is correct or try again later.";
  }
}
