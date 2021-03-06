let jumbo = document.getElementsByClassName('jumbotron')[0];
let donate = document.getElementsByClassName('btn btn-primary btn-lrg')[0];
let volunteer = document.getElementsByClassName('btn btn-secondary btn-lrg')[0];

let blueButton = document.querySelector('#blueBtn');
blueButton.addEventListener('click', function(){
  jumbo.style.backgroundColor = '#588fbd';
  donate.style.backgroundColor = '#ffa500';
  volunteer.style.backgroundColor = 'black';
  volunteer.style.color = 'white';
})

let orangeButton = document.querySelector('#orangeBtn');
orangeButton.addEventListener('click', function(){
  jumbo.style.backgroundColor = '#f0ad4e';
  donate.style.backgroundColor = '#5751fd';
  volunteer.style.backgroundColor = '#31b0d5';
  volunteer.style.color = 'white';
})

let greenButton = document.querySelector('#greenBtn');
greenButton.addEventListener('click', function(){
  jumbo.style.backgroundColor = '#87ca8a';
  donate.style.backgroundColor = 'black';
  volunteer.style.backgroundColor = '#8c9c08';
})

let submitButton = document.querySelector('form .btn-primary');
let name = document.querySelector('#example-text-input');
let description = document.querySelector("#exampleTextarea");
let email = document.querySelector('#exampleInputEmail1')

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (name.value.length < 1 && description.value.length < 1 && email.value.length < 1 && !email.value.includes("@")){
    name.style.backgroundColor = 'red';
    description.style.backgroundColor = 'red';
    email.style.backgroundColor = 'red';
  } else {
    alert('thank you for filling out the form')
    name.value = "";
    description.value = "";
    email.value = "";
  }
})
