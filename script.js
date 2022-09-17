let levelList = document.getElementById("level-list");
let levelButton = document.getElementsByClassName("level-button");
let songList = document.getElementsByClassName("song-list");
let backButton = document.getElementById("back-button");


for (let i = 0; i < levelButton.length; i++) {
  levelButton[i].addEventListener("click", callSongList);
}

backButton.addEventListener("click", hideSongList);

function callSongList(e) {
  levelList.classList.add("inactive-level-list");
  for (let j = 0; j < songList.length; j++) {
    console.log(this.id)
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

