// Loop through objects values
const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "orange",
  color4: "green",
};

for (const key in colorObj) {
  // console.log(key);
  console.log(colorObj[key]);
  // console.log(key, colorObj[key]);
}

// Can also loop through arrays
const colorArr = ["red", "green", "blue", "yellow"];

for (const key in colorArr) {
  // console.log(key);// this is an array so the key is the index
  console.log(colorArr[key]);
}
