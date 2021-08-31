// Find the buttons & the lists

let button1 = document.getElementById("level-1-button")
let button2 = document.getElementById("level-2-button")
let button3 = document.getElementById("level-3-button")

let list1 = document.getElementById("level-1-list")
let list2 = document.getElementById("level-2-list")

list1.addEventListener("click", function(e) {
  list1.style.display = 'block';
  list2.style.display = 'none';
}
                       
list2.addEventListener("click", function(e) {
  list1.style.display = 'none';
  list2.style.display = 'block';
}
