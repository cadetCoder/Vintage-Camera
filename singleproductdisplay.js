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
      <p class="card-text">Lense selection:</p>
      <select class="form-control" id="lenses-option"><option>${lenses}</option></select>
      <a href="cart.html" class="btn btn-primary my-2">Add to the cart</a>
      </div>
      </div>
      </article>
  `;


      console.log(output)
      document.getElementById('camera').innerHTML = output;
    })
}

getCameras()
