// Accessing DOM from form
const myForm = document.getElementById('myForm');
const submitBtn = document.getElementById('submit-button');

console.log(submitBtn, myForm, formData);

function inputValidation() {
  fetch('http://localhost:3000/api/cameras/order', { method: 'post', body: {} })
    .then((res) => res.json())
    .then((data) => {
      let output = ""
      console.log(data);
      document.getElementById('output').innerHTML = output;
    })
};

submitBtn.addEventListener('click',
  function (e) {
    e.preventDefault()
    console.log(submitBtn);
  }
)

inputValidation()