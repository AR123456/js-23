const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");

const run = () => {
  // className - can get
  // console.log(itemList.className);
  // or set
  text.className = "dark";
  // classList object- the better way to handle
  // its a dom token list and similar to an array
  // console.log(itemList.classList);
  //
  // itemList.classList.forEach((item) => {
  //   // getting the class list this way
  //   console.log(item);
  // });
  /// add dark them to classList
  // text.classList.add("dark");
  // // can also remove
  // text.classList.remove("card");
  /// toggle
  // text.classList.toggle("dark");
  // text.classList.replace("card", "dark");
  //// using style property
  itemList.style.lineHeight = "3";
  // can use for each
  items.forEach((item, index) => {
    item.style.color = "red";
    if (index === 2) {
      item.style.color = "blue";
    }
  });
};

// set up the on click to run the run function
document.querySelector("button").onclick = run;
