// Get references to the input elements and error messages
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

// Add an event listener to the form's submit event
document.querySelector('.container-login').addEventListener('submit', (event) => {
  // Prevent the form from being submitted
  event.preventDefault();

  // Clear any previous error messages
  emailError.textContent = '';
  passwordError.textContent = '';

  // Validate the email input
  if (!emailInput.value) {
    emailError.textContent = 'Email is required';
  } else if (!emailInput.value.includes('@')) {
    emailError.textContent = 'Email must be a valid email address';
  }

  // Validate the password input
  if (!passwordInput.value) {
    passwordError.textContent = 'Password is required';
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
  }

  // If there are no errors, submit the form data
  if (!emailError.textContent && !passwordError.textContent) {
    // Submit the form data here
    console.log('Form submitted:', {
      email: emailInput.value,
      password: passwordInput.value,
    });
  }
});