// Accessing DOM
const camera = document.querySelector('#camera');
const params = new URLSearchParams(window.location.search);
const id = params.get('camera');
console.log(camera, params, id, window.location.search);
const cartTotal = document.querySelector(".cartTotal");

//Api request & Dynamic function

function getCameras() {
  fetch('http://localhost:3000/api/cameras/' + id)
    .then(function (res) {
      return res.json()
    })
    .then(function (camera) {
      console.log(camera);
      let lenses = "";

      //Setting the options for type of lenses
      camera.lenses.forEach((lens) => {
        lenses += `<option>${lens}</option>`
      })

      let output = ""
      output += `
      <article class="col-12 col-md-6 mx-auto product-container">
      <div class="card text-center">
      <img src="${camera.imageUrl}" class="card-img-top">
      <div class="card-body">
      <h3 class="card-title">${camera.name}</h3>
      <p class="card-text">${camera.description}</p>
      <p class="card-text" id="price">Price: $ ${camera.price}</p>
      <p class="card-text">Lense selection</p>
      <select class="form-control" id="lenses-option">
      <option value="choose">Please choose a lense${lenses}</option></select>
      <a class="btn btn-primary my-2" id="addItemToCart" href="cart.html">Add to the cart</a>
      <a class="btn btn-outline-dark my-2" href="index.html">Continue shopping</a>
      </div>
      </div>
      </article>
  `;

      console.log(output)
      document.getElementById('camera').innerHTML = output;


      // Local Storage in Browsers
      const productsInCart = document.getElementById('addItemToCart');

      productsInCart.addEventListener('click', function () {
        console.log('My cart items are', productsInCart);

        const lense = document.getElementById('lenses-option').value;
        console.log(lense);

        // setting an object for the local storage
        let addItemToCart = {
          image: camera.imageUrl,
          name: camera.name,
          price: camera.price,
          id: camera._id,
          lense: lense,
        };

        let cartItems = localStorage.getItem('productsInCart');

        cartItems = JSON.parse(cartItems) || [];
        console.log('items in my cart', cartItems);

        let allCartItems = [
          ...cartItems, addItemToCart
        ];

        window.localStorage.setItem('productsInCart', JSON.stringify(allCartItems));
        console.log('Items in cart', addItemToCart);
      })
    })
}

getCameras()