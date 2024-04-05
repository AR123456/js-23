// consts
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const musicContainer = document.getElementById("music-container");
const pause = `<button id="pause" class="action-btn action-btn-big">
<i class="fas fa-pause"></i>
</button>`;

const playSong = () => {
  musicContainer.classList.add("play");
  // change the play button to a pause button -
  play.innerHTML = pause;
  //play song
  audio.play();
  document.getElementById("pause").addEventListener("click", () => {
    musicContainer.classList.remove("play");
    audio.pause();
  });
};

play.addEventListener("click", playSong);
