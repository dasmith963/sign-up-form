const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const firstNameError = document.querySelector('#first-name + span.error');
const lastNameError = document.querySelector('#last-name + span.error');
const emailError = document.querySelector('#email + span.error');
const phoneError = document.querySelector('#phone + span.error');
const passwordError = document.querySelector('#password + span.error');
const form = document.querySelector('form');

firstName.addEventListener('input', checkFirstName);
lastName.addEventListener('input', checkLastName);
email.addEventListener('input', checkEmail);
phone.addEventListener('input', checkPhoneNumber);
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkPassword);

form.addEventListener('submit', (e) => {
  if (!firstName.validity.valid) {
    checkFirstName();
    e.preventDefault();
  }
  if (!lastName.validity.valid) {
    checkLastName();
    e.preventDefault();
  }
  if (!email.validity.valid) {
    checkEmail();
    e.preventDefault();
  }
  if (!phone.validity.valid) {
    checkPhoneNumber();
    e.preventDefault();
  }
  if (!password.validity.valid) {
    checkPassword();
    e.preventDefault();
  }
  if (!confirmPassword.validity.valid) {
    checkPassword();
    e.preventDefault();
  }
  form.className = 'submit';
})

function checkFirstName() {
  if (firstName.validity.valid) {
    firstNameError.textContent = '';
  } else if (firstName.validity.valueMissing) {
    firstNameError.textContent = '*Please enter your first name';
  }
}

function checkLastName() {
  if (lastName.validity.valid) {
    lastNameError.textContent = '';
  } else if (lastName.validity.valueMissing) {
    lastNameError.textContent = '*Please enter your last name';
  }
}

function checkEmail() {
  if (email.validity.typeMismatch) {
    emailError.textContent = '*Format: abc@example.com';
  } else if (email.validity.valueMissing) {
    emailError.textContent = '*Please enter your email address';
  } else {
    emailError.textContent = '';
  }
}
function checkPhoneNumber() {
  const validNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (phone.validity.valueMissing) {
    phoneError.textContent = '*Please enter your phone number';
  } else if (!phone.value.match(validNumber)) {
    phoneError.textContent = '*Format: (123) 456-7890';
  } else {
    phoneError.textContent = '';
  }
}

function checkPassword() {
  if (password.value !== '' && confirmPassword.value === '') {
    passwordError.textContent = '';
  } else if (password.value !== confirmPassword.value) {
    passwordError.textContent = '*Passwords do not match';
  } else if (password.value === '' || confirmPassword === '') {
    passwordError.textContent = '*Please enter a password';
  }
}