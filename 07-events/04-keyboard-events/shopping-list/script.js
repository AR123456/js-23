const itemInput = document.getElementById("item-input");

const onKeyUp = () => console.log("keyup");
const onKeyDown = () => console.log("keydown");

itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
