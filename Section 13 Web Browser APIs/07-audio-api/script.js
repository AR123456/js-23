const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const volume = document.getElementById("volume");
const currentTime = document.getElementById("current-time");

play.addEventListener("click", () => audio.play());
pause.addEventListener("click", () => audio.pause());
stop.addEventListener("click", () => {
  audio.pause();
  // resetting to 0 brings to begining of song
  audio.currentTime = 0;
});
// display the tracktime
audio.addEventListener("timeupdate", () => {
  currentTime.innerText = audio.currentTime;
});
// input slider so tag change event
volume.addEventListener("change", () => (audio.volume = volume.value));
