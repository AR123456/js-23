// set interval returns and id - here hello is an arg -
// const intervalID = setInterval(theCallback, 1000, "Hello");

// function theCallback(hello) {
//   console.log(hello, Date.now());
// }

// define storage of intervalID;
let intervalID;

function startChange() {
  // check to see if the setInterval is running
  if (!intervalID) {
    // set it and call the changeColor function after one sec and then run it every one seconds
    intervalID = setInterval(changeColor, 1000);
  }
}

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}
function stopChange() {
  clearInterval(intervalID);
}
document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);