const ball = document.getElementById("ball");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reverse = document.getElementById("reverse");
const speed = document.getElementById("speed-up");
const slow = document.getElementById("slow-down");
let rate = 1;

// animations object
const ballRoll = [
  {
    transform: "rotate(0) translate3D(-50%, -50%, 0)",
    color: "white",
  },
  {
    color: "blue",
    offset: 0.3,
  },
  {
    transform: "rotate(360deg) translate3D(-50%, -50%, 0)",
    color: "white",
  },
];
const ballTiming = {
  duration: 3000,
  iterations: Infinity,
};
const roll = ball.animate(ballRoll, ballTiming);
roll.pause();
play.addEventListener("click", () => {
  roll.play();
});
pause.addEventListener("click", () => {
  roll.pause();
});
reverse.addEventListener("click", () => {
  roll.reverse();
});
speed.addEventListener("click", () => {
  roll.updatePlaybackRate(rate++);
});
slow.addEventListener("click", () => {
  roll.updatePlaybackRate(rate--);
});
