// Navbar
const sideNavbar = document.getElementById("sideNavbar");
if (sideNavbar) {
  function onOpenNavbar() {
    sideNavbar.style.left = "0";
  }

  function onCloseNavbar() {
    sideNavbar.style.left = "-100%";
  }
}

// Pricing tiers
const monthlyPlanBtn = document.getElementById("monthlyPlanBtn");
const annualPlanBtn = document.getElementById("annualPlanBtn");

const basicPlanPrice = document.getElementById("basicPlanPrice");
const basicPlanLabel = document.getElementById("basicPlanLabel");

const standardPlanPrice = document.getElementById("standardPlanPrice");
const standardPlanLabel = document.getElementById("standardPlanLabel");

const premiumPlanPrice = document.getElementById("premiumPlanPrice");
const premiumPlanLabel = document.getElementById("premiumPlanLabel");

if (monthlyPlanBtn && annualPlanBtn && basicPlanPrice && basicPlanLabel && standardPlanPrice && standardPlanLabel && premiumPlanPrice && premiumPlanLabel) {
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
}

// FAQ
const accordions = document.getElementsByClassName("faq__accordion__label");
if (accordions.length > 0) {
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
}

// Newsletter
const newsletterEmailField = document.getElementById("newsletterEmail");
const newsletterEmailError = document.getElementById("newsletterEmailError");
const toast = document.getElementById("toaster");

if (newsletterEmailField && newsletterEmailError && toast) {
  newsletterEmailField.addEventListener("input", function () {
    if (this.validity.valid) {
      newsletterEmailError.style.display = "none";
      newsletterEmailField.classList.remove("input__field--error");
    } else if (this.validity.typeMismatch) {
      newsletterEmailError.style.display = "block";
      newsletterEmailError.textContent = "Please enter a valid email address.";
      newsletterEmailField.classList.add("input__field--error");
    } else if (this.validity.valueMissing) {
      newsletterEmailError.style.display = "block";
      newsletterEmailError.textContent = "Email address is required";
      newsletterEmailField.classList.add("input__field--error");
    }
  });

  function onSubmitNewsletter(event) {
    event.preventDefault();

    //clear all the values after submit
    newsletterEmailField.value = "";
    toast.style.display = "flex";

    const toastContent = toast.firstElementChild;
    const toastContentBadge = toastContent.firstElementChild;
    const toastContentMessage = toastContent.lastElementChild;

    const success = true;

    if (success) {
      toastContent.classList.add("toast__content--success");
      toastContentBadge.innerText = "Success";
      toastContentMessage.innerText =
        "Subscription successful! Please check your email to confirm.";
    } else {
      toastContent.classList.add("toast__content--error");
      toastContentBadge.classList.add("toast__content__badge--error");
      toastContentBadge.innerText = "Error";
      toastContentMessage.innerText =
        "Failed to subscribe. Please ensure your email is correct or try again later.";
    }
  }
}

// Contact
const contactNameField = document.getElementById("contactName");
const contactNameError = document.getElementById("contactNameError");

const contactEmailField = document.getElementById("contactEmail");
const contactEmailError = document.getElementById("contactEmailError");

const contactMessageField = document.getElementById("contactMessage");
const contactMessageError = document.getElementById("contactMessageError");

const contactMessageCharCountValue = document.getElementById("contactMessageCharCountValue");
const contactMessageCharCountLabel = document.getElementById("contactMessageCharCountLabel");
const contactForm = document.getElementById("contactForm");
const contactConfirmation = document.getElementById("contactConfirmation");

if (contactNameField && contactNameError && contactEmailField && contactEmailError && contactMessageField && contactMessageError && contactMessageCharCountValue && contactMessageCharCountLabel && contactForm && contactConfirmation) {
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
      contactEmailError.textContent = "Please enter a valid email address";
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
}

// Footer
const copyrightYearElement = document.getElementById("copyrightYear");
if (copyrightYearElement) {
  const year = new Date().getFullYear();
  copyrightYearElement.innerText = year;
}

// Cookie consent
const popupElement = document.getElementById("popupOverlay");
const cookieConsentBanner = document.getElementById("cookieConsentBanner");

const analyticsConsent = document.getElementById("analyticsConsent");
const marketingConsent = document.getElementById("marketingConsent");

if (popupElement && cookieConsentBanner && analyticsConsent && marketingConsent) {
  function openManageCookies() {
    popupElement.style.display = "block";
  }

  popupElement.addEventListener("click", function (event) {
    if (event.target === popupElement) {
      popupElement.style.display = "none";
    }
  });

  function setCookieConsent(marketing, analytics) {
    // Calculate expiration time (1 year from now in seconds)
    const expirationTime = 365 * 24 * 60 * 60; // 1 year in seconds

    // Store the consent status in cookies with max-age
    document.cookie = `essential=${true}; max-age=${expirationTime}; path=/`;
    document.cookie = `marketing=${marketing}; max-age=${expirationTime}; path=/`;
    document.cookie = `analytics=${analytics}; max-age=${expirationTime}; path=/`;

    // Hide the cookie consent banner after setting the consent
    popupElement.style.display = "none";
    cookieConsentBanner.style.display = "none";
  }

  function acceptAllCookies() {
    setCookieConsent(true, true);
  }

  function rejectAllCookies() {
    setCookieConsent(false, false);
  }

  function saveCookies() {
    setCookieConsent(marketingConsent.checked, analyticsConsent.checked);
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Check if there's a previous consent
  const previousEssentialConsent = getCookie("essential");
  const previousMarketingConsent = getCookie("marketing");
  const previousAnalyticsConsent = getCookie("analytics");

  if (
    previousEssentialConsent &&
    previousMarketingConsent &&
    previousAnalyticsConsent
  ) {
    // Hide the cookie consent banner if all consents are previously given
    cookieConsentBanner.style.display = "none";
  }
}