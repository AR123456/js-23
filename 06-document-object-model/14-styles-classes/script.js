const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");

const run = () => {
  console.log("run");
};

// set up the on click to run the run function
document.querySelector("button").onclick = run;
