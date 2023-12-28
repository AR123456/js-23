const itemInput = document.getElementById("item-input");

const onKeyUp = (e) => {
  console.log("keyup");
};
const onKeyDown = (e) => {
  // you can get the key that is pressed
  console.log(e.key);
  console.log(e.keyCode);
};

itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
