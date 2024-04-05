// psudo code
// declare vars will need play pause next prev

// looking a the css style when .play css is applied ot the music containter div image spins and progress bar appears
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const musicContainer = document.getElementById("music-container");

const playSong = () => {
  musicContainer.classList.add("play");
  // change the play button to a pause button
  play.innerHTML = `<i class="fas fa-pause"></i>`;
};

play.addEventListener("click", playSong);
