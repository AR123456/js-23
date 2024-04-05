// consts
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const musicContainer = document.getElementById("music-container");
const pause = `<button id="play" class="action-btn action-btn-big">
<i class="fas fa-pause"></i>
</button>`;

const playSong = () => {
  musicContainer.classList.add("play");
  // change the play button to a pause button -
  play.innerHTML = pause;
  //play song
  audio.play();
};

play.addEventListener("click", playSong);
pause.addEventListener("click", () => audio.pause());
audio.addEventListener("timeupdate", () => {
  progress.innerText = audio.progress;
});
