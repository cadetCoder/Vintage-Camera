function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems) || [];
  console.log('items in my cart', cartItems);

  let productContainer = document.querySelector('.products');
  let totalContainer = document.querySelector('#summarySection');
  let cartSummary = document.querySelector('#full-cart');
  console.log('Product container', productContainer);

  // add product to the cart

  // Cart Details
  if (cartItems.length > 0 && productContainer) {
    let output = '';
    let total = 0;
    cartItems.forEach(function (product) {
      output += `
      <article class="col-12 col-md-6 mx-auto product-container">
      <div class="card text-center">
      <div>${product.name}</div>
      <div class="text-center">$ ${product.price}</div> </div></article>
      `;
      total += product.price;
      console.log(total);
    }
    )
    productContainer.innerHTML = output;

    // Total price of the items in cart
    totalContainer.innerHTML = `
    <p class="font-weight-bold font">$ ${total}</p>
    <a class="btn btn-danger btn-sm my-2 removeBtn">Clear cart</a>`;

    const removeButton = document.querySelector('.removeBtn');

    // Button to remove items in the cart
    removeButton.addEventListener('click',
      function () {
        localStorage.removeItem("productsInCart");
        location.reload(true);
        console.log('items removed');
      });
  }
  else {
    //cart summary removed when cart is empty
    productContainer.innerHTML =
      '<div class="container my-5" id="empty-cart"><div class="col-12 col-md-9 mx-auto text-center"><h2 class="mb-5 font-weight-bold text-primary">Your Orinico cart is empty</h2><div class="text-center"><div class="card-body"><a href="index.html" class="btn btn-success">Go shopping</a></div></div></div></div></div></div>';

    cartSummary.classList.add('d-none');
  }
}

displayCart()