// Find the buttons & the lists

let buttons = document.getElementsByClassName('level-button');
console.log(buttons);
let lists = document.getElementsByClassName('level-list');
console.log(lists);

let listLoader = function(i) {
  for (let j = 0; j < lists.length; j++) {
    lists[j].setAttribute("display", "hidden");
  }
  list[i].setAttribute("display", "block");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', listLoader(i));
}

