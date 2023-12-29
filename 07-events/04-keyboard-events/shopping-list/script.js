const itemInput = document.getElementById("item-input");

const onKeyUp = (e) => {
  console.log("keyup");
};
const onKeyDown = (e) => {
  // you can get the key that is pressed
  console.log(e.key);
  console.log(e.keyCode);
  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  if (e.keyCode === 13) {
    alert("You pressed enter");
  }
  // code
  if (e.code === "Digit1") {
    console.log("You pressed 1");
  }
};

itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
