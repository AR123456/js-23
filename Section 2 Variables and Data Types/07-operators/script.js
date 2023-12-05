// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation - using + sign
x = "Hello" + " " + "World";

// Exponent 2 to the power of 3
x = 2 ** 3;

// Increment ++ is the short cut
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment Operators - does the math and assigns

x = 10;

x += 5;
x -= 5;
x *= 5; //50
x /= 5;
x %= 5; // this is 0  (10%5)
x **= 5;

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == "2";

// Equal to (Type and value)
x = 2 === "2";

// Not equal to (Just the value, not the type)
x = 2 != "2";

// Not equal to (Type and value)
x = 2 !== 2;

// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
