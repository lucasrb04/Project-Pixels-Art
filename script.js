window.onload = document.querySelector('.color').classList.add('selected');
// function selected () {
//   document.querySelectorAll('.color')
// }
const paleta = document.querySelector('#color-palette');
console.log(paleta.children);

function selectedColor(event) {
  const color = event.target;
  console.log(color);
  const prop = window.getComputedStyle(color, null).getPropertyValue('background-color');
  for (let i = 0; i < paleta.children.length; i += 1) {
    paleta.children[i].classList.remove('selected');
  }
  color.classList.add('selected');
}
paleta.addEventListener('click', selectedColor);

// var elem = document.getElementById("test");
// var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
// document.getElementById("demo").innerHTML = theCSSprop;
