// set interval returns and id - here hello is an arg -
// const intervalID = setInterval(theCallback, 1000, "Hello");

// function theCallback(hello) {
//   console.log(hello, Date.now());
// }

// define storage of intervalID;
let intervalID;

function startChange() {
  // check to see if the setInterval is running
}

function stopChange() {
  clearInterval(intervalID);
}
document.getElementById("stop").addEventListener("click", stopChange);
