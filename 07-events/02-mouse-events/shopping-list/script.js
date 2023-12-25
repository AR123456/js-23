// variables
const logo = document.querySelector("img");

// functions
const onClick = () => {
  console.log(logo);
};
const onDoubleClick = () => {
  document.body.style.backgroundColor = "purple";
};
const onRightClick = () => {
  document.body.style.backgroundColor = "yellow";
};
const onMouseDown = () => console.log("mouse down event");
const onMouseUp = () => console.log("mouse up event");
const onMouseWheel = () => console.log("mouse wheel event");
//////event listeners
// click
logo.addEventListener("click", onClick);
// double click
logo.addEventListener("dblclick", onDoubleClick);
// right click
logo.addEventListener("contextmenu", onRightClick);
// mouse down and mouse up
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
// m
