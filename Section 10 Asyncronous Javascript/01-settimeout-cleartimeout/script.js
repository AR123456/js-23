//setTimeout()
setTimeout(function () {
  console.log("hello from time out");
}, 100);
console.log("Hello I run first ");
// can be a named function
function changeText() {
  document.querySelector("h1").innerHTML = "Hello from query selector callback";
}
setTimeout(changeText, 3000);
// setTimeout returns an id can use it in set
const timerID = setTimeout(changeText, 3000);
// using clearTimeout added to event on  button
document.querySelector("button").addEventListener("click", () => {
  clearTimeout(timerID);
  console.log("timer cancelled");
});
