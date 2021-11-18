// Find the buttons & the lists

let buttons = document.getElementsByClassName('level-button');
console.log(buttons);
let lists = document.getElementsByClassName('level-list');
console.log(lists);
let splash = document.getElementById('splash');

let listLoader = function() {
  splash.setAttribute("display", "hidden");
   for (let j = 0; j < lists.length; j++) {
    lists[j].setAttribute("display", "hidden");
  }
  let currentList = document.getElementById("level-" + this.id + "-list");
  console.log(currentList);
  currentList.setAttribute("display", "block");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', listLoader);
}

