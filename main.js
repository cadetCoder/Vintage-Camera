
function getCamera() {
  fetch('http://localhost:3000/api/cameras')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      let output = ""
      data.forEach(function (camera) {
        output += `
  <div>
  <figure>${camera.imageUrl}</figure>
  <h2>${camera.name}</h2>
  <h3>${camera.price}</h3>
  <p>${camera.description}</p>
  </div>
  `;
      });
      document.getElementById('camera').innerHTML = output;
    })
    .catch((err) => console.log(err))
}

getCamera()
