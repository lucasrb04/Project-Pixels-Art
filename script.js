window.onload = document.querySelector('.color').classList.add('selected');
// function selected () {
//   document.querySelectorAll('.color')
// }
const paleta = document.querySelector('#color-palette');

function selectedColor(event) {
  const color = event.target;
  const theCSSprop = window.getComputedStyle(event.target, null).getPropertyValue('background-color');
  console.log(theCSSprop);
}
paleta.addEventListener('click', selectedColor);

// var elem = document.getElementById("test");
// var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
// document.getElementById("demo").innerHTML = theCSSprop;
