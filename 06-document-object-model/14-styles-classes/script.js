const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");

const run = () => {
  // className - can get
  console.log(itemList.className);
  // or set
  text.className = "dark";
};

// set up the on click to run the run function
document.querySelector("button").onclick = run;
