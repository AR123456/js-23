const user = "Brad";
console.log(user);

// IFFE Syntax (Has it's own scope and runs right away)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// create an un named function in the parens
(function () {
  const user = "John";
  console.log(user);
  const hello = () => console.log("Hello from the IIFE");
  hello();
})();

// Params
(function (name) {
  console.log("Hello " + name);
})("Shawn");

// Named IIFE (Can only be called recursively) or witin the function so this is not used much
(function hello() {
  console.log("Hello");
  // if you were to pass hello() into itself here it would cause an ininite loop
  // the parens here are invoking the iffe
})();
// recursion - function  called from itself
