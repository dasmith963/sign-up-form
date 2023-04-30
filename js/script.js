const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const firstNameError = document.querySelector('#first-name + span.error');
const lastNameError = document.querySelector('#last-name + span.error');
const form = document.querySelector('form');

firstName.addEventListener('input', checkFirstName);
lastName.addEventListener('input', checkLastName);


form.addEventListener('submit', (e)=>{
  if (!firstName.validity.valid){
    checkFirstName();
    e.preventDefault();
  }
  if (!lastName.validity.valid){
    checkLastName();
    e.preventDefault();
  }
  form.className = 'submit';
})

function checkFirstName (){
  if (firstName.validity.valid){
    firstNameError.textContent = '';
    firstNameError.className = 'error';
  } else if (firstName.validity.valueMissing){
    firstNameError.textContent = '*Please enter your first name';
    firstNameError.className = 'error active';
  }
}
function checkLastName (){
  if (lastName.validity.valid){
    lastNameError.textContent = '';
    lastNameError.className = 'error';
  } else if (lastName.validity.valueMissing){
    lastNameError.textContent = '*Please enter your last name';
    lastNameError.className = 'error active';
  }
}