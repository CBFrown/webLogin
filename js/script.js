const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate the username and password fields
  if (username.value.trim() === '') {
    showError('Username is required');
    return;
  }

  if (password.value.trim() === '') {
    showError('Password is required');
    return;
  }

  // Submit the form
  form.submit();
});

function showError(message) {
  // Create a new error message element
  const error = document.createElement('div');
  error.classList.add('error');
  error.textContent = message;

  // Insert the error message above the login form
  form.insertAdjacentElement('beforebegin', error);

  // Remove the error message after 5 seconds
  setTimeout(() => {
    error.remove();
  }, 5000);
}

const forgotPasswordLink = document.querySelector('.links a:first-of-type');

forgotPasswordLink.addEventListener('click', (event) => {
  event.preventDefault();
  
  const options = ['Email', 'Phone number', 'Security question'];
  const index = prompt(`Please choose an option:\n${options.join('\n')}`);
  
  if (index === null) {
    return;
  }
  
  const option = options[index];
  
  switch (option) {
    case 'Email':
      const email = prompt('Please enter your email address:');
      
      if (email.trim() === '') {
        showError('Email is required');
        return;
      }
      
      alert(`A password reset link has been sent to ${email}.`);
      break;
      
    case 'Phone number':
      const phone = prompt('Please enter your phone number:');
      
      if (phone.trim() === '') {
        showError('Phone number is required');
        return;
      }
      
      alert(`A password reset code has been sent to ${phone}.`);
      break;
      
    case 'Security question':
      const answer = prompt('Please enter the answer to your security question:');
      
      if (answer.trim() === '') {
        showError('Answer is required');
        return;
      }
      
      alert(`Your password has been reset.`);
      break;
  }
});

const createAccountLink = document.querySelector('.links a:last-of-type');

createAccountLink.addEventListener('click', (event) => {
  event.preventDefault();
  
  const options = ['Email', 'Phone number'];
  const index = prompt(`Please choose an option:\n${options.join('\n')}`);
  
  if (index === null) {
    return;
  }
  
  const option = options[index];
  
  switch (option) {
    case 'Email':
      const email = prompt('Please enter your email address:');
      
      if (email.trim() === '') {
        showError('Email is required');
        return;
      }
      
      alert(`An account has been created for ${email}.`);
      break;
      
    case 'Phone number':
      const phone = prompt('Please enter your phone number:');
      
      if (phone.trim() === '') {
        showError('Phone number is required');
        return;
      }
      
      alert(`An account has been created for ${phone}.`);
      break;
  }
});

/*register*/

// Get form elements

const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const birthdayInput = document.querySelector('#birthday');
const addressInput = document.querySelector('#address');
const zipcodeInput = document.querySelector('#zipcode');
const aboutInput = document.querySelector('#about');

// Validate form on submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Validate name
  const name = nameInput.value.trim();
  if (name === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }
  
  // Validate age
  const age = ageInput.value.trim();
  if (age === '' || isNaN(age) || age < 1) {
    alert('Please enter a valid age.');
    ageInput.focus();
    return false;
  }
  
  // Validate gender
  let gender = '';
  genderInputs.forEach((input) => {
    if (input.checked) {
      gender = input.value;
    }
  });
  if (gender === '') {
    alert('Please select your gender.');
    return false;
  }
  
  // Validate birthday
  const birthday = birthdayInput.value.trim();
  if (birthday === '') {
    alert('Please enter your birthday.');
    birthdayInput.focus();
    return false;
  }
  
  // Validate address
  const address = addressInput.value.trim();
  if (address === '') {
    alert('Please enter your address.');
    addressInput.focus();
    return false;
  }
  
  // Validate zipcode
  const zipcode = zipcodeInput.value.trim();
  if (zipcode === '' || isNaN(zipcode) || zipcode.length !== 5) {
    alert('Please enter a valid 5-digit zipcode.');
    zipcodeInput.focus();
    return false;
  }
  
  // Validate about
  const about = aboutInput.value.trim();
  if (about === '') {
    alert('Please tell us about yourself.');
    aboutInput.focus();
    return false;
  }
  
  // Submit form
  alert('Thank you for registering!');
  form.submit();
});

function notAvailable(){
    alert("Not Available");
}