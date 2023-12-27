/* Conditional (ternary) operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement. */
const age = 17;

// Using an if statement
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can not vote");
}

// Using a ternary operator
age >= 18 ? console.log("You can vote!") : console.log("You can not vote");

// Assigning a conditional value to a variable
// if you are 18 or more you can vote
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You can vote!" : "You can not vote";

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;

// Long version
let redirect1;

if (auth) {
  console.log("Welcome to the dashboard");
  redirect1 = "/dashboard";
} else {
  console.log("Access Denied");
  redirect1 = "/login";
}

// Shorter ternary version
const redirect = auth
  ? (console.log("Welcome to the dashbaord"), "/dashboard")
  : (console.log("Access Denied"), "/login");

console.log(redirect);

// Ternary with no else
auth ? console.log("Welcome to the dashboard") : null;
// Shorthand for ternary with no else
auth && console.log("Welcome to the dashoard");
