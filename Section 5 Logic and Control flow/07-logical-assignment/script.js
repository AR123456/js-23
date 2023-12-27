// ||= Logical OR assignment (||=) assigns the right side value only if the left is a falsy value.

let a1 = null;
// writing this out longhand
// if a1 is a faulsy value
if (!a1) {
  // set it to 1=
  a1 = 10;
}
console.log(a1);
let a = null;
// to set it using the or operator
a = a || 10;
// shortest yet use the assignment operator
a ||= 10;

console.log(a);

// &&= the logical AND assignment (&&=) operator assigns the right side value only if the left is a truthy value.

let b = 10;
// longhand
if (b) {
  b = 20;
}
// logical operator
b = b && 20;
// assignment operator
b &&= 20;

console.log(b);

// ??=  nullish coalescing assignment (??=) operator assigns the right side value only if the left is null or undefined.

let c = null;
// long way
// if c is null or undefined
if (c === null || c === undefined) {
  // set c to this
  c = 20;
}
// using logical operator
c = c ?? 20;

c ??= 20;
// using assignment operator
console.log(c);
