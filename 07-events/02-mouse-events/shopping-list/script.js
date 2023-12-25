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
const onMouseOver = () => console.log("mouse over event");
const onMouseOut = () => console.log("mouse out event");
const onDragStart = () => console.log("drag start event");
const onDrag = () => console.log("drag  event");
const onDragEnd = () => console.log("drag end event");
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
// mouse wheel when over the logo
logo.addEventListener("wheel", onMouseWheel);
// mouse over
logo.addEventListener("mouseover", onMouseOver);
// mouse out
logo.addEventListener("mouseout", onMouseOut);
// mouse drag start
logo.addEventListener("dragstart", onDragStart);
// mouse drag
logo.addEventListener("drag", onDrag);
// drag end
logo.addEventListener("dragend", onDragEnd);
