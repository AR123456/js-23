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
function stopChange() {
  clearInterval(intervalID);
}
function changeColor() {
  if (document.body.style.backgroundColor !== "pink") {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "white";
  }
}

document.getElementById("stop").addEventListener("click", stopChange);
document.getElementById("start").addEventListener("click", startChange);
