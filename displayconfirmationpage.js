
// Retrieve Total price and order details by Url query
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const price = params.get("price");


function confirmedOrders() {

  const totalPrice = document.getElementById('total-price');
  const responseOrderId = document.getElementById('response-id');


  totalPrice.innerHTML = 'Total price: ' + ' $ ' + price;
  responseOrderId.innerHTML = 'Order id: ' + id;

}

confirmedOrders()