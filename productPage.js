//Product page: 
const camera = document.getElementById('camera');
//Api request & Dynamic function

function getCameras() {
  fetch('http://localhost:3000/api/cameras')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      let output = ""
      data.forEach(function (camera) {
        output += `
        <article class="col-12 col-md-6 col-lg-3 mx-auto my-2">
        <div class="card text-center">
        <img src="${camera.imageUrl}" class="card-img-top">
        <div class="card-body">
        <h3 class="card-title">${camera.name}</h3>
        <p class="card-text">${camera.description}</p>
        <a href="./singleproductdisplay.html?camera=${camera._id}" class="btn btn-primary">Shop Now</a>
        </div>
        </div>
        </article>`;
      });
      document.getElementById('camera').innerHTML = output;
    })

}

getCameras()
