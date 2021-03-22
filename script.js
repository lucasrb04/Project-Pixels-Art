/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
window.onload = document.querySelector('.color').classList.add('selected');
// function selected () {
//   document.querySelectorAll('.color')
// }
const paleta = document.querySelector('#color-palette');

function selectedColor(event) {
  const color = event.target;
  for (let i = 0; i < paleta.children.length; i += 1) {
    paleta.children[i].classList.remove('selected');
  }
  color.classList.add('selected');
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

function replaceSize (size) {
  if (size < 5 && size > 0) {
    document.querySelector('#board-size').value = 5;
  } else if (size > 50) {
    document.querySelector('#board-size').value = 50;
  }
}


function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function createTd() {
  const trItem = document.querySelectorAll('tr');
  for (let i = 0; i < trItem.length; i += 1) {
    let count = 0;
    while (count < trItem.length) {
      const createTdItem = document.createElement('td');
      createTdItem.className = 'pixel';
      trItem[i].appendChild(createTdItem);
      count += 1;
    }
  }
}
function clearTr() {
  const pixelBoard = document.querySelectorAll('tr');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].remove();
  }
}

function createTr(boardSize) {
  if (boardSize < 1) {
    return alert('Board inválido!');
  }
  clearTr();
  let counte = 0;
  const pixelBoard = document.querySelector('#pixel-board');
  while (counte < boardSize) {
    const createTrItem = document.createElement('tr');
    pixelBoard.appendChild(createTrItem);
    counte += 1;
  }
  createTd();
}

const tableBtn = document.querySelector('#generate-board');
tableBtn.addEventListener('click', function () {
  replaceSize(document.querySelector('#board-size').value);
});

tableBtn.addEventListener('click', function () {
  createTr(document.querySelector('#board-size').value);
});

createTr(5);

const clearBtn = document.querySelector('#clear-board');
clearBtn.addEventListener('click', clear);

