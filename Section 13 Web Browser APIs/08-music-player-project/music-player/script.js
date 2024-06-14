// consts
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const musicContainer = document.getElementById("music-container");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
// string to match to track and pull in the correct source files by same name
const songs = ["hey", "summer", "ukulele"];
// track song, starting with ukulele by default
let songIndex = 2;
// load the song details into the info div

const pauseBtn = `<button id="play" class="action-btn action-btn-big">
<i class="fas fa-pause"></i>
</button>`;

const playSong = () => {
  musicContainer.classList.add("play");
  // change the play button to a pause button -
  playBtn.innerHTML = pauseBtn;
  //play song
  audio.play();
};

playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", () => audio.pause());
audio.addEventListener("timeupdate", () => {
  progress.innerText = audio.progress;
});
