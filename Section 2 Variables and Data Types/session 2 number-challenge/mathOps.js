/* # Number Challenge
**Instructions:**
Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.
Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

- You can log the output string directly or put them in separate variables and log them like below.
- You can use string concatenation or template literals for the output.
**Expected Result:**

```JavaScript
console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.066666666666667
console.log(rmOutput); // 31 % 15 = 1
``` */

let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 50);
const sumOutput = () => {
  return x + y;
};
const differenceOutput = () => {
  return x - y;
};
const productOutput = () => x * y;
// re start with next 2

console.log(x, y);
console.log(sumOutput(x, y));
console.log(differenceOutput(x, y));
console.log(productOutput(x, y));
