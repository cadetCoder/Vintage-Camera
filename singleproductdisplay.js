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
      camera.lenses.forEach((lens) => {
        lenses += `<option>${lens}</option>`
      })

      let output = ""
      output += `
      <article class="col-12 col-md-6 mx-auto">
      <div class="card text-center">
      <img src="${camera.imageUrl}" class="card-img-top">
      <div class="card-body">
      <h3 class="card-title">${camera.name}</h3>
      <p class="card-text">${camera.description}</p>
      <p class="card-text">Price: $ ${camera.price}</p>
      <p class="card-text">Lense selection</p>
      <select class="form-control" id="lenses-option">
      <option value="choose">Please choose a lense${lenses}</option></select>
      <a class="btn btn-primary my-2" id="addItemToCart">Add to the cart</a>
      </div>
      </div>
      </article>
  `;
      console.log(output)
      document.getElementById('camera').innerHTML = output;

      // Local Storage in Browsers
      const carts = document.getElementById('addItemToCart');
      console.log(carts);

      carts.addEventListener('click', function () {
        console.log('clicked cart');

        const lense = document.getElementById('lenses-option').value;
        console.log(lense);
        let addItemToCart = {
          name: camera.name,
          price: camera.price,
          id: camera._id,
          lense: lense,
        };

        window.localStorage.setItem('carts', JSON.stringify(addItemToCart));
        console.log(addItemToCart);
      })
    })
}
getCameras()