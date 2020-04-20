
// Request Function
function inputValidation() {

  // Get form elements
  let myForm = document.getElementById('myForm');
  let firstNameInput = document.getElementById('first-name').value;
  let lastNameInput = document.getElementById('last-name').value;
  let addressInput = document.getElementById('address').value;
  let cityInput = document.getElementById('city').value;
  let emailInput = document.getElementById('email').value;
  let cart = JSON.parse(localStorage.getItem('productsInCart'));
  let errorMessage = document.getElementById('error-message');

  console.log(firstNameInput, lastNameInput, addressInput, cityInput, emailInput, submitButton, cart);

  let confirmedOrder = [];
  cart.forEach(function (product) {
    confirmedOrder.push(product.id);
    console.log(product.id);
  });
  console.log(confirmedOrder);

  if (firstNameInput.length < 5) {
    text = "Please enter valid first name";
    errorMessage.innerHTML = text;
    return false;
  } else if (lastNameInput.length < 5) {
    text = "Please enter valid last name";
    errorMessage.innerHTML = text;
    return false;
  } else if (address.length < 5) {
    text = "Please enter valid address";
    errorMessage.innerHTML = text;
    return false;
  } else if (city.length < 5) {
    text = "Please enter valid city";
    errorMessage.innerHTML = text;
    return false;
  } else if (emailInput.indexOf('@') == -1 || email.length < 6) {
    text = "Please Enter a Valid Email Address";
    errorMessage.innerHTML = text;
    return false;
  } else {
    text = '';
    errorMessage.innerHTML = text;
    errorMessage.classList.add('d-none');
  }

  fetch('http://localhost:3000/api/cameras/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contact: {
        firstName: firstNameInput,
        lastName: lastNameInput,
        address: addressInput,
        city: cityInput,
        email: emailInput,
      },
      products: confirmedOrder,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Response to the user
    })
}

let submitButton = document.getElementById('submit-button');
console.log('Before click');
submitButton.addEventListener('click',
  function (e) {
    e.preventDefault();
    console.log('clicked');
    console.log('executed');
    inputValidation()
  }
);