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
let songIndex = songs.length - 1;

// function to load songs into the info div
const loadSong = (song) => {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
};
loadSong(songs[songIndex]);

playBtn.addEventListener("click", () => {
  // check if song is playing pause, if not play
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
