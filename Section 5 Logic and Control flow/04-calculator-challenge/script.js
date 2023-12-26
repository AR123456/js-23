/* # Calculator Challenge

**Instructions:**

Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

**Example:**

```
calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message */

const calculator = (num1, num2, operator) => {
  console.log(num1, num2, operator);
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num;
      break;
    case "&":
      result = "& leads to error";
      break;

    default:
      result = "must use +, -,* or /";
  }
  console.log(result);
  return result;
};

calculator(5, 2, "+");
