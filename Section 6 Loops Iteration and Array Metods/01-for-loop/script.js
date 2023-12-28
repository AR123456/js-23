// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax
/* From MDM 
for (initialization; condition; afterthought)
  statement
When a for loop executes, the following occurs:
1The initializing expression initialization, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2The condition expression is evaluated. If the value of condition is true, the loop statements execute. Otherwise, the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.)
3The statement executes. To execute multiple statements, use a block statement ({ }) to group those statements.
4If present, the update expression afterthought is executed.
5Control returns to Step 2.
 */
// don't use const in a for loop
// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("7 is my lucky number");
//   } else {
//     console.log("Number " + i);// will stop at 10
//   }
// }

//Nested loops
for (let a = 1; a <= 10; a++) {
  console.log("Number a iterator " + a);

  for (let j = 1; j <= 5; j++) {
    console.log(
      `A in the nested loop ${a} * J in the nested loop is ${j}  so a*j is = ${
        a * j
      }`
    );
  }
}

// Loop through an array- forEach is a better way to loop an array
const names = ["Brad", "Sam", "Sara", "John", "Tim"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "John") {
    console.log(names[i] + " is the best");
  } else {
    console.log(names[i]);
  }
}
