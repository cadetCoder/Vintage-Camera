
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

  let confirmedOrder = [];
  let total = 0;

  cart.forEach(function (product) {
    confirmedOrder.push(product.id);

    //sum of the item in the cart
    total += product.price;
  });

  // sending form conditions
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

  // POST Request
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

      //Items will be cleared in the local storage after submitting the order
      localStorage.removeItem("productsInCart");

      // Response to the user
      window.location.href = 'displayconfirmationpage.html?id=' + data.orderId + '&price=' + total;
    })
}

//submit order button + send data to backend
let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click',
  function (e) {
    e.preventDefault();
    inputValidation()
  });