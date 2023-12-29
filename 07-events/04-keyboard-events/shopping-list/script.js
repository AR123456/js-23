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
  // repeat
  if (e.repeat) {
    console.log("You are holding down " + e.key);
  }
  // shiftKey, ctrlKey & altKey
  console.log("Shift: " + e.shiftKey);
  console.log("Control: " + e.ctrlKey);
  console.log("Alt: " + e.altKey);
};

itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
