// Find the buttons & the lists

let buttons = document.getElementsByClassName('level-button');
console.log(buttons);
let lists = document.getElementsByClassName('level-list');
console.log(lists);
let splash = document.getElementById('splash');

function listLoader() {
  console.log("Click detected!" + this.id);
  splash.style.display = "none";
  /*
  for (let j = 0; j < lists.length; j++) {
    lists[j].style.display = "none";
  }
  
  let currentList = document.getElementById("level-" + i + "-list");
  console.log(currentList);
  currentList.style.display = "block"; */
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', listLoader());
}

