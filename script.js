// Find the buttons & the lists

let button1 = document.getElementById("level-1-button");
let button2 = document.getElementById("level-2-button");
let button3 = document.getElementById("level-3-button");
let button4 = document.getElementById("level-4-button");
let button5 = document.getElementById("level-5-button");

let splash = document.getElementById("splash");
let list1 = document.getElementById("level-1-list");
let list2 = document.getElementById("level-2-list");
let list3 = document.getElementById("level-3-list");
let list4 = document.getElementById("level-4-list");
let list5 = document.getElementById("level-5-list");

// When the Level 1 button is clicked, hide splash and any other lists that might be open.

button1.addEventListener("click", function() {
  console.log("Level 1 clicked!");
  splash.style.display = "none";
  list1.style.display = 'block';
  list2.style.display = 'none';
  list3.style.display = 'none';
  list4.style.display = 'none';
  list5.style.display = 'none';
});

// When the Level 2 button is clicked, hide splash and any other lists that might be open.

button2.addEventListener("click", function() {
  console.log("Level 2 clicked!");
  splash.style.display = "none";
  list1.style.display = 'none';
  list2.style.display = 'block';
  list3.style.display = 'none';
  list4.style.display = 'none';
  list5.style.display = 'none';
});

// When the Level 3 button is clicked, hide splash and any other lists that might be open.

button3.addEventListener("click", function() {
  console.log("Level 3 clicked!");
  splash.style.display = "none";
  list1.style.display = 'none';
  list2.style.display = 'none';
  list3.style.display = 'block';
  list4.style.display = 'none';
  list5.style.display = 'none';
});


// When the Level 4 button is clicked, hide splash and any other lists that might be open.

button4.addEventListener("click", function() {
  console.log("Level 4 clicked!");
  splash.style.display = "none";
  list1.style.display = 'none';
  list2.style.display = 'none';
  list3.style.display = 'none';
  list4.style.display = 'block';
  list5.style.display = 'none';
});


// When the Level 5 button is clicked, hide splash and any other lists that might be open.

button5.addEventListener("click", function() {
  console.log("Level 5 clicked!");
  splash.style.display = "none";
  list1.style.display = 'none';
  list2.style.display = 'none';
  list3.style.display = 'none';
  list4.style.display = 'none';
  list5.style.display = 'block';
});
