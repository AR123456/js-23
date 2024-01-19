// set interval returns and id
const intervalID = setInterval(theCallback, 1000);

function theCallback() {
  console.log(Date.now());
}
function stopChange() {
  clearInterval(intervalID);
}
document.getElementById("stop").addEventListener("click", stopChange);
