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

document.getElementById("ball").animate(ballRoll, ballTiming);
