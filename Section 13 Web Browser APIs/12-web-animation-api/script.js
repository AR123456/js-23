const ball = document.getElementById("ball");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reverse = document.getElementById("reverse");
const speed = document.getElementById("speed-up");
const slow = document.getElementById("slow-down");

// animations object
const ballRoll = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0" },
  { color: "white" },
  { color: "blue" },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)" },
  { color: "white" },
];
const ballTiming = {
  duration: 3000,
  iterations: Infinity,
};

play.addEventListener("click", () => {
  ball.animate(ballRoll, ballTiming);
});
pause.addEventListener("click", () => {
  ball.animate(ballRoll, ballTiming).pause();
});
reverse.addEventListener("click", () => {
  ball.animate(ballRoll, ballTiming).reverse();
});
speed.addEventListener("click", () => {
  ball.animate(ballRoll, ballTiming).pause();
});
slow.addEventListener("click", () => {
  ball.animate(ballRoll, ballTiming).pause();
});
