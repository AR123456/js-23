// Loop through arrays  likely that forEach array method is better for arrays but this works
const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Brad" }, { name: "Kate" }, { name: "Steve" }];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user);
  // use dot notation to get to name
  console.log(user.name);
}

// Loop over strings
const str = "Hello World";

for (const letter of str) {
  console.log(letter);
}
// could call it i
for (const i of str) {
  console.log(i);
}

// Loop over Maps -
const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}
