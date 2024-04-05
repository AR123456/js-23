const video = document.getElementById("video");
const controls = document.getElementById("controls");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

const playVideo = () => {
  video.play();
};
const stopVideo = () => {
  video.pause();
};

const progressBar = () => {
  //   console.log(progress.value);
  //   console.log(video.duration);
  //   console.log(video.currentTime);
  const progressPercent = (video.currentTime / video.duration) * progress.value;
  console.log(progressPercent);
};

timestamp.innerHTML = video.currentTime;
play.addEventListener("click", playVideo);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", progressBar);
video.addEventListener("timeupdate", () => {
  timestamp.innerText = video.currentTime.toFixed(2);
});
