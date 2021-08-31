// Find the buttons & the lists

let button1 = document.getElementById("level-1-button")
let button2 = document.getElementById("level-2-button")
let button3 = document.getElementById("level-3-button")

let splash = document.getElementById("splash")
let list1 = document.getElementById("level-1-list")
let list2 = document.getElementById("level-2-list")

// When the Level 1 button is clicked, hide splash and any other lists that might be open.

list1.addEventListener("click", function(e) {
  console.log("Level 1 clicked!");
  splash.style.display = "none";
  list1.style.display = 'block';
  list2.style.display = 'none';
});
                       
list2.addEventListener("click", function(e) {
  console.log("Level 2 clicked!");
  splash.style.display = "none";
  list1.style.display = 'none';
  list2.style.display = 'block';
});
