// Get form elements
let myForm = document.getElementById('myForm');
let firstNameInput = document.getElementById('first-name').value;
let lastNameInput = document.getElementById('last-name').value;
let addressInput = document.getElementById('address').value;
let cityInput = document.getElementById('city').value;
let emailInput = document.getElementById('email').value;
let submitButton = document.getElementById('submit-button');

console.log(firstNameInput);

function inputValidation() {
  fetch('http://localhost:3000/api/cameras/order', {
    method: 'POST',
    body: JSON.stringify({ firstNameInput: firstNameInput, lastNameInput: lastNameInput, address: address, city: city, email: email })
  })
    .then((res) => res.json())
    .then((data) =>
      console.log(data))
}

submitButton.addEventListener('click',
  function (e) {
    e.preventDefault();
    console.log(submitButton);
  }
)

// User input validation. The RegExp constructor creates a regular expression object for matching text with a pattern format.
emailInput.addEventListener('input', (e) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value.match(mailformat)) {
    submitButton.removeAttribute('disabled');
  }
  else {
    submitButton.setAttribute('disabled');
  }
});

inputValidation()