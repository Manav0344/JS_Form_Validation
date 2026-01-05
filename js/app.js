const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

 
  successMsg.textContent = '';


  let isValid = true;


  if (nameInput.value.trim().length < 3) {
    setInvalid(nameInput);
    isValid = false;
  } else {
    setValid(nameInput);
  }


  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    setInvalid(emailInput);
    isValid = false;
  } else {
    setValid(emailInput);
  }


  if (passwordInput.value.length < 6) {
    setInvalid(passwordInput);
    isValid = false;
  } else {
    setValid(passwordInput);
  }


  if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === '') {
    setInvalid(confirmPasswordInput);
    isValid = false;
  } else {
    setValid(confirmPasswordInput);
  }


  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    setInvalid(phoneInput);
    isValid = false;
  } else {
    setValid(phoneInput);
  }


  if (isValid) {
    successMsg.textContent = "Registration Successful!";
    form.reset();
    removeValidationStyles();
  }
});


function setInvalid(element) {
  element.classList.add('is-invalid');
  element.classList.remove('is-valid');
}

function setValid(element) {
  element.classList.add('is-valid');
  element.classList.remove('is-invalid');
}

function removeValidationStyles() {
  [nameInput, emailInput, passwordInput, confirmPasswordInput, phoneInput].forEach(input => {
    input.classList.remove('is-valid', 'is-invalid');
  });
}
