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
const playSong = () => {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
};
const pauseSong = () => {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
};
const prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};
const nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};
const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = Math.floor((currentTime / duration) * 100);
  progressContainer.style.width = `${progressPercent}%`;
};
const setProgress = (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.pageX - progressContainer.offsetLeft;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
};
playBtn.addEventListener("click", () => {
  // check if song is playing pause, if not play
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
// display the tracktime
audio.addEventListener("timeupdate", updateProgress);
// grab and drag progress
progressContainer.addEventListener("click", setProgress);
