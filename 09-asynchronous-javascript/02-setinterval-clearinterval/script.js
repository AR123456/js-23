const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const startColorChange = () => {
  //
};
const stopColorChange = () => {};

start.addEventListener("click", setInterval(console.log("I started"), 2000));
stop.addEventListener("click", stopColorChange);
