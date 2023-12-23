const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");

const run = () => {
  // className - can get
  console.log(itemList.className);
  // or set
  // text.className = "dark";
  // classList object- the better way to handle
  // its a dom token list and similar to an array
  console.log(itemList.classList);
  //
};

// set up the on click to run the run function
document.querySelector("button").onclick = run;
