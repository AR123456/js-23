// Function Declaration -- you could define this at the bottom of the page and be able to run it at the top of the page
function addDollarSign(value) {
  return "$" + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
console.log(addDollarSign(100));

// Function Expression - this one cannot be called before it is expressed.
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(200));
// Invoked in same way , espression is a function assigned to a variable.  They have differences when it comes to hoisting. Hoisting is process of moving all the function and variable declarations to the top of the current scope before the code is run.  Only function declorations are avalable before the code is executed.
