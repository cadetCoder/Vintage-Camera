
// Retrieve Total price and order details by Url query
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const price = params.get("price");
console.log(params, id, price);


function confirmedOrders() {
  console.log('Items confirmed');

  const totalPrice = document.getElementById('total-price');
  const responseOrderId = document.getElementById('response-id');

  console.log(totalPrice, responseOrderId);

  totalPrice.innerHTML = 'Total price: ' + ' $ ' + price;
  responseOrderId.innerHTML = 'Order id: ' + id;

}

confirmedOrders()