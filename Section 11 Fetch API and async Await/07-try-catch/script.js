// async await and try catch statements
//console.log(x); // logs uncaught ReferenceError
// use the try catch when there is a risk of needing to catch an error like when making api calls
try {
  // functionNotDeclared();
} catch (error) {
  console.error(error);
}
// dyi error message

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + " is not a number");
  }
  return number * 2;
}

try {
  const y = double("hello");
} catch (error) {
  console.log(error);
}
