//Product page: 

//Api request

var section = document.querySelector('#camera');
var apiUrl = 'http://localhost:3000/api/cameras';
var request = new XMLHttpRequest();
request.open('GET', apiUrl);
request.responseType = 'json';
request.send();

//The load event fires when the response has successfully returned, it guarantees that request.response will be available.

request.onerror = function () {
  alert('Server error, please try again later');
};

//Dynamic function

request.onload = function () {
  var product = request.response;

  for (var i = 0; i < product.length; i++) {

    var { myImage, myH3, myPara1, link, myArticle, div1, div2 } = varElements();

    elementsContent(myImage, product, i, myH3, myPara1, link);

    appendiceChild(myArticle, div1, myImage, div2, myH3, myPara1, link);

    setAttribute(myArticle, div1, myImage, div2, myH3, myPara1, link);
  }
};

//Function details

function varElements() {
  var myArticle = document.createElement('article');
  var div1 = document.createElement('div');
  var div2 = document.createElement('div');
  var myImage = document.createElement('img');
  var myH3 = document.createElement('h3');
  var myPara1 = document.createElement('p');
  var link = document.createElement('a');
  return { myImage, myH3, myPara1, link, myArticle, div1, div2 };
}

function elementsContent(myImage, product, i, myH3, myPara1, link) {
  myImage.src = product[i].imageUrl;
  myH3.textContent = product[i].name;
  myPara1.textContent = product[i].description;
  link.textContent = 'Product details';
  link.href = 'product.html?id=' + product[i]._id; //URL query parameters
}

function appendiceChild(myArticle, div1, myImage, div2, myH3, myPara1, link) {
  section.appendChild(myArticle);
  myArticle.appendChild(div1);
  div1.appendChild(myImage);
  div1.appendChild(div2);
  div2.appendChild(myH3);
  div2.appendChild(myPara1);
  div2.appendChild(link);
}

function setAttribute(myArticle, div1, myImage, div2, myH3, myPara1, link) {
  myArticle.setAttribute('class', 'col-12 col-md-6 col-lg-3 mx-auto my-2');
  div1.setAttribute('class', 'card text-center');
  myImage.setAttribute('class', 'card-img-top');
  div2.setAttribute('class', 'card-body');
  myH3.setAttribute('class', 'card-title');
  myPara1.setAttribute('class', 'card-text');
  link.setAttribute('class', 'btn btn-primary');
}
