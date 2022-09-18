// Variables

let levelList = document.getElementById("level-list");
let levelButton = document.getElementsByClassName("level-button");
let songList = document.getElementsByClassName("song-list");
let songButton = document.getElementsByClassName("song-button")
let backButton = document.getElementById("back-button");
let iframe = document.getElementById("iframe");
let splash = document.getElementById("splash");
let videoLink = document.getElementById("video-link");



// Click Events

backButton.addEventListener("click", hideSongList);

for (let i = 0; i < levelButton.length; i++) {
  levelButton[i].addEventListener("click", callSongList);
}

for (let l = 0; l < songButton.length; l++) {
  songButton[l].addEventListener("click", loadSong);
}



// Functions

function callSongList(e) {
  levelList.classList.add("inactive-level-list");
  for (let j = 0; j < songList.length; j++) {
    if (songList[j].id == ("level-" + (this.id))) {
      songList[j].classList.add("active-song-list");
    }
  }
  backButton.classList.add("back-button-active")    
}


function hideSongList() {
  for (let k = 0; k < songList.length; k++) {
    songList[k].classList.remove("active-song-list") 
  }
  levelList.classList.remove("inactive-level-list");
  backButton.classList.remove("back-button-active");
}


function loadSong(e) {
  splash.style.display = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.src = this.dataset.pdf + "#zoom=118";
  videoLink.href = this.dataset.video;
}