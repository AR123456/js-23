// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};
// things passed into if statements are coericed into booleans by javascript
if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 0;

// Checking for literal 0
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log("The number 0 is falsy");
  console.log("Please enter number of children");
}

// Solution
if (!isNaN(children)) {
  console.log(
    "to check if the children const is not undefined or  0 is not not a number  "
  );
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays
const posts = [];

// Always true even when empty
if (posts) {
  console.log("Arrays are truthy even if empty");
  console.log("List Posts");
} else {
  console.log("No Posts To List");
}

// Solution
if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log(
    "since an empty array has a length of -1, to solve check if its length is greater that 0 "
  );
  console.log("No Posts To List");
}

// Checking for empty objects
const user = {
  // name: "Brad",
};

// Always true, even when no properties
if (user) {
  console.log("an object is always true even if empty");
  console.log("List User");
} else {
  console.log("No User");
}

// Solution
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log(
    "To solve use object.keys which is an array and check that its length is greater than 0"
  );
  console.log("No User");
}

// Loose Equality (==)
console.log(false == 0); // true
console.log("" == 0); // true
console.log(null == undefined); // true

// Strict Equality
console.log(false === 0); // false
console.log("" === 0); // false
console.log(null === undefined); // false
