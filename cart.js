//Cart page: Summary of products in the cart, Total price and form for submit the order.
fetch('http://localhost:3000/api/cameras')
  .then(function (res) {
    return res.json()
  })
  .then(function (data) {
    console.log(data)
    document.getElementById('camera').innerHTML = output;
  })
getCameras()

  (function () {
    const carts = document.querySelectorAll('.add-cart')
  })();