const nameField = document.getElementById("name");
const nameError = document.getElementById('name-error');

const emailField = document.getElementById('email');
const emailError = document.getElementById('email-error');

const messageField = document.getElementById('message');
const messageError = document.getElementById('message-error');

const charCountValue = document.getElementById('charCountValue');
const charCountLabel = document.getElementById('charCountLabel');
const form = document.getElementById('form');
const confirmation = document.getElementById('confirmation');
const toast = document.getElementById('toaster');

function onMessageChange() {
  const valueLength = messageField.value.length;

  charCountValue.innerHTML = valueLength;

  if (valueLength > 500) {
    charCountLabel.classList.add('input__char-count--exceed');
    messageField.classList.add('input__field--error');
  } else {
    charCountLabel.classList.remove('input__char-count--exceed');
    messageField.classList.remove('input__field--error');
  }
}

// Name validation
nameField.addEventListener('invalid', function () {
  nameError.style.display = 'block';
});

nameField.addEventListener('input', function () {
  if (this.validity.valid) {
    nameError.style.display = 'none';
  }
});

// Email validation
emailField.addEventListener('invalid', function () {
  emailError.style.display = 'block';
  if (this.validity.valueMissing) {
    emailError.textContent = 'Email address is required';
  } else if (this.validity.typeMismatch) {
    emailError.textContent = 'Please enter valid email address';
  }
});
emailField.addEventListener('input', function () {
  if (this.validity.valid) {
    emailError.style.display = 'none';
  }
});

// Message validation
messageField.addEventListener('invalid', function () {
  messageError.style.display = 'block';
});
messageField.addEventListener('input', function () {
  if (this.validity.valid) {
    messageError.style.display = 'none';
  }
});

async function onSubmit(event) {
  event.preventDefault();

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: emailField.value,
      name: nameField.value,
      message: messageField.value,
    }), // Send the data in JSON format
  };

  // Make the request
  const response = await fetch(
    'https://www.greatfrontend.com/api/projects/challenges/contact',
    requestOptions
  );
  const result = await response.json();

  const toastContent = toast.firstElementChild;
  const toastContentMessage = toastContent.lastElementChild;

  if (response.ok) {
    form.style.display = 'none';
    confirmation.style.display = 'flex';

    //clear all the values after submit
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    charCountValue.textContent = 0;
    // Display toast
  } else {
    toast.style.display = 'flex';
    toastContentMessage.innerText = result.error;
  }
}

function onSendAnotherMessage() {
  form.style.display = "flex";
  confirmation.style.display = "none";
}
