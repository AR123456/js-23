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
