// Find the buttons & the lists

let buttons = document.getElementsByClassName('level-button');
let lists = document.getElementsByClassName('level-list');
let splash = document.getElementById('splash');

let listLoader = function() {
  console.log("Click detected!");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', listLoader);
}

