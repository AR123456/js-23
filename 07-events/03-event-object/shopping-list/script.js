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
  // the type of event that was triggered
  console.log(e.type);

  console.log(e.timeStamp);
  // mouse click relative to the window
  console.log(e.clientX);
  console.log(e.clientY);
  // mouse click relative to the element
  console.log(e.offsetX);
  console.log(e.offsetY);
  // position relative to page
  console.log(e.pageX);
  console.log(e.pageY);
  // position relative to screen
  console.log(e.screenX);
  console.log(e.screenY);
}
logo.addEventListener("click", onClick);
// events bubble up to the parents
document.body.addEventListener("click", function (e) {
  // the target is what was clicked
  console.log(e.target);
  // here the event is put on the body, not the image tag
  console.log(e.currentTarget);
});

/// e.prevent default - stop the default behavior
document.querySelector("a").addEventListener("click", function (e) {
  // this is very useful when working with forms
  e.preventDefault();
  console.log("Link was clicked ");
});
