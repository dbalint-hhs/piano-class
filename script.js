// Find the buttons & the lists

let buttons = document.getElementsByClassName('level-button');
let lists = document.getElementsByClassName('level-list');

let listLoader = function() {
  console.log("Click detected!" + this.id);
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.display = "none";
  };
  lists[this.id].style.display = "block";
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', listLoader);
}

