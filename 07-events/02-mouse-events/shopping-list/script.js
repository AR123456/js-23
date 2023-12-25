// variables
const logo = document.querySelector("img");

// functions
const onClick = () => {
  console.log(logo);
};
const onDoubleClick = () => {
  document.body.style.backgroundColor = "purple";
};
//////event listeners
// click
logo.addEventListener("click", onClick);
// double click
logo.addEventListener("dblclick", onDoubleClick);
