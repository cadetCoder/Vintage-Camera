// Accessing DOM
const camera = document.querySelector('#camera');
const params = new URLSearchParams(window.location.search);
const id = params.get("camera");
console.log(camera, params, id, window.location.search)

//Api request & Dynamic function

function getCameras() {
  fetch('http://localhost:3000/api/cameras/' + id)
    .then(function (res) {
      return res.json()
    })
    .then(function (camera) {
      console.log(camera)
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
      <select class="form-control" id="lenses-option"><option>${lenses}</option></select>
      <a class="btn btn-primary my-2 add-cart">Add to the cart</a>
      </div>
      </div>
      </article>
  `;
      let carts = document.querySelectorAll('.add-cart');

      console.log(carts);
      for (let i = 0; i < carts.length; i++) {
        console.log(carts[i])
        carts[i].addEventListener('click', (evt) => {
          evt.preventDefault();
          console.log('click');
        })
      }
      // sample exercise
      const test = document.getElementById('test');
      console.log(test);
      test.addEventListener('click', function () {
        console.log('test click');
      })

      window.localStorage.setItem('test', 'store');

      const check = window.localStorage.getItem('test');
      console.log(check);
      // End of exercises


      // Storing Data in Browsers

      function localStorage(product, link) {
        let productData = {
          name: product.name,
          price: product.price,
          id: product._id,
          qty: 1
        };

        const itemsArray = window.localStorage.getItem('#cart') ?
          JSON.parse(window.localStorage.getItem('#cart')) : [];
        itemsArray.push(productData);

        window.localStorage.setItem('cart', JSON.stringify(itemsArray));
        console.log('localStorage');
      }
      localStorage(camera)

      console.log(output)
      document.getElementById('camera').innerHTML = output;
    })
}

getCameras()

