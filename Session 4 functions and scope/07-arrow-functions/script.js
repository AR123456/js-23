//  Normal function declaration
function add1(a, b) {
  return a + b;
}
// Traditional anonymous function
(function (d) {
  return d + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(d) => {
  return d + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(d) => d + 100;

// 3. Remove the parameter parentheses
(d) => d + 100;
///////////////////////////////////////////////////////
// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: "Brad",
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
