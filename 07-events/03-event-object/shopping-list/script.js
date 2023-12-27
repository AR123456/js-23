const logo = document.querySelector("img");
// adding event listener
logo.addEventListener("click", function (e) {
  console.log(e);
});

// logging out some stuff in the pointer event

function onClick(e) {
  // Event properties
  //the target is the element that triggered the event
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.style.backgroundColor = "black";
  console.log(e.type);
  console.log(e.timeStamp);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
  console.log(e.pageX);
  console.log(e.pageY);
  console.log(e.screenX);
  console.log(e.screenY);
}
logo.addEventListener("click", onClick);
