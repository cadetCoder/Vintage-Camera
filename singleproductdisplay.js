//Event listener;

document.getElementById('getLenses').addEventListener('click', getLenses);


//Api request & Dynamic function

function getLenses() {
  fetch('http://localhost:3000/api/cameras/' + '' + 'url')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      let output = "";
      {
        output += `
      <article class="col-12 col-md-6 mx-auto">
      <div class="card text-center">
      <img src="${camera.imageUrl}" class="card-img-top">
      <div class="card-body">
      <h3 class="card-title">${camera.name}</h3>
      <p class="card-text">${camera.description}</p>
      <p class="card-text">Price: £ ${camera.price}</p>
      <p class="card-text">Lense selection:</p>
      <select class="form-control"><option>${camera.lenses}</option></select>
      <a href="cart.html" class="btn btn-primary my-2">Add to the cart</a>
      </div>
      </div>
      </article>
  `;
      });
  console.log(output)
  document.getElementById('camera').innerHTML = output;
})


function newFunction() {
  return 'data';
}
}

getCameras()
