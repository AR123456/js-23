let amount = "hello";

// Convert string to number using +
// could also use parsInt or like below parseFloat the Number constructor may also work
amount = +amount;
amount = Number(amount);
amount = parseInt(amount);

// Convert number to string
// to string creates a temporary wrapper
amount = amount.toString();
// string constructor
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean - truthy  / false- if 0, 0 is the only false
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);
