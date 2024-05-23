// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

// Navbar
document.getElementById('mobile-menu-button').addEventListener('click', () => {
  document.getElementById('slideout-menu').classList.toggle('open');
});

document
  .getElementById('mobile-close-menu-button')
  .addEventListener('click', () => {
    document.getElementById('slideout-menu').classList.toggle('open');
  });

// FAQ
const accordions = document.getElementsByClassName("faq__accordion__label");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    const faqContent = this.nextElementSibling;
    const activeIcon = this.lastElementChild.firstElementChild;
    const inactiveIcon = this.lastElementChild.lastElementChild;
    faqContent.classList.toggle('open');
    activeIcon.classList.toggle('open');
    inactiveIcon.classList.toggle('open');
  });
}

// Contact
const contactNameField = document.getElementById("contactName");
const contactNameError = document.getElementById("contactNameError");

const contactEmailField = document.getElementById("contactEmail");
const contactEmailError = document.getElementById("contactEmailError");

const contactMessageField = document.getElementById("contactMessage");
const contactMessageError = document.getElementById("contactMessageError");

const contactMessageCharCountValue = document.getElementById(
  "contactMessageCharCountValue"
);
const contactMessageCharCountLabel = document.getElementById(
  "contactMessageCharCountLabel"
);
const contactForm = document.getElementById("contactForm");
const contactConfirmation = document.getElementById("contactConfirmation");

function onMessageChange() {
  const valueLength = contactMessageField.value.length;

  contactMessageCharCountValue.innerHTML = valueLength;

  if (valueLength > 500) {
    contactMessageCharCountLabel.classList.add("input__char-count--exceed");
    contactMessageField.classList.add("input__field--error");
  } else {
    contactMessageCharCountLabel.classList.remove("input__char-count--exceed");
    contactMessageField.classList.remove("input__field--error");
  }
}

// Name validation
contactNameField.addEventListener("invalid", function () {
  contactNameError.style.display = "block";
});

contactNameField.addEventListener("input", function () {
  if (this.validity.valid) {
    contactNameError.style.display = "none";
  }
});

// Email validation
contactEmailField.addEventListener("invalid", function () {
  contactEmailError.style.display = "block";
  if (this.validity.valueMissing) {
    contactEmailError.textContent = "Email address is required";
  } else if (this.validity.typeMismatch) {
    contactEmailError.textContent = "Please enter valid email address";
  }
});
contactEmailField.addEventListener("input", function () {
  if (this.validity.valid) {
    contactEmailError.style.display = "none";
  }
});

// Message validation
contactMessageField.addEventListener("invalid", function () {
  contactMessageError.style.display = "block";
});
contactMessageField.addEventListener("input", function () {
  if (this.validity.valid) {
    contactMessageError.style.display = "none";
  }
});

function onSubmitContact(event) {
  event.preventDefault();

  contactForm.style.display = "none";
  contactConfirmation.style.display = "flex";

  //clear all the values after submit
  contactNameField.value = "";
  contactEmailField.value = "";
  contactMessageField.value = "";
  contactMessageCharCountValue.textContent = 0;
}

function onSendAnotherMessage() {
  contactForm.style.display = "flex";
  contactConfirmation.style.display = "none";
}

// Footer
const year = new Date().getFullYear();
const copyrightYearElement = document.getElementById("copyrightYear");

copyrightYearElement.innerText = year;
