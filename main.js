$('.dropdown-toggle').dropdown()

function getCameras() {
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
  ${camera.name}
  </div>
  `;
      });
      document.getElementById('camera').innerHTML = output;
    })

}

getCameras()
