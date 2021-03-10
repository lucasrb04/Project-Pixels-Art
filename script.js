window.onload = document.querySelector('.color').classList.add('selected');
// function selected () {
//   document.querySelectorAll('.color')
// }
const paleta = document.querySelector('#color-palette');

function selectedColor(event) {
  const color = event.target;
  // const prop = window.getComputedStyle(color, null).getPropertyValue('background-color');
  for (let i = 0; i < paleta.children.length; i += 1) {
    paleta.children[i].classList.remove('selected');
  }
  color.classList.add('selected');
  // return (prop);
}
paleta.addEventListener('click', selectedColor);

const table = document.querySelector('#pixel-board');
function paint(event) {
  for (let i = 0; i < paleta.children.length; i += 1) {
    if (paleta.children[i].classList.contains('selected')) {
      const color = window.getComputedStyle(paleta.children[i], null).getPropertyValue('background-color');
      console.log(color);
      const block = event.target;
      block.style.backgroundColor = color;
    }
  }
}
table.addEventListener('click', paint);

// function paint

// var elem = document.getElementById("test");
// var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
// document.getElementById("demo").innerHTML = theCSSprop;
