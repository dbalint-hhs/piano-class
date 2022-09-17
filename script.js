let listOfLevels = document.getElementById("list-of-levels")
let levelOneSongs = document.getElementById("level-1-songs")

listOfLevels.addEventListener("click", () => {
  listOfLevels.classList.add("inactive")
  levelOneSongs.classList.add("active")
})