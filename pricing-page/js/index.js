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

// Pricing tiers
const monthlyPlanBtn = document.getElementById("monthlyPlanBtn");
const annualPlanBtn = document.getElementById("annualPlanBtn");

const basicPlanPrice = document.getElementById("basicPlanPrice");
const basicPlanLabel = document.getElementById("basicPlanLabel");

const standardPlanPrice = document.getElementById("standardPlanPrice");
const standardPlanLabel = document.getElementById("standardPlanLabel");

const premiumPlanPrice = document.getElementById("premiumPlanPrice");
const premiumPlanLabel = document.getElementById("premiumPlanLabel");

annualPlanBtn.addEventListener("click", function () {
  annualPlanBtn.classList.add("btn", "btn--secondary");
  monthlyPlanBtn.classList.remove("btn", "btn--secondary");

  basicPlanPrice.innerText = "$6.99";
  basicPlanLabel.innerText = "Billed annually ($84)";

  standardPlanPrice.innerText = "$15.99";
  standardPlanLabel.innerText = "Billed annually ($192)";

  premiumPlanPrice.innerText = "$25.99";
  premiumPlanLabel.innerText = "Billed annually ($312)";
});

monthlyPlanBtn.addEventListener("click", function () {
  annualPlanBtn.classList.remove("btn", "btn--secondary");
  monthlyPlanBtn.classList.add("btn", "btn--secondary");

  basicPlanPrice.innerText = "$9.99";
  basicPlanLabel.innerText = "Billed monthly";

  standardPlanPrice.innerText = "$19.99";
  standardPlanLabel.innerText = "Billed monthly";

  premiumPlanPrice.innerText = "$29.99";
  premiumPlanLabel.innerText = "Billed monthly";
});

// FAQ
const accordions = document.getElementsByClassName("faq__accordion__label");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    const faqContent = this.nextElementSibling;
    const activeIcon = this.lastElementChild.firstElementChild;
    const inactiveIcon = this.lastElementChild.lastElementChild;
    if (faqContent.style.display === "none") {
      faqContent.style.display = "block";
      activeIcon.style.display = "block";
      inactiveIcon.style.display = "none";
    } else {
      faqContent.style.display = "none";
      activeIcon.style.display = "none";
      inactiveIcon.style.display = "block";
    }
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
