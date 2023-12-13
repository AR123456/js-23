let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// Nesting arrays

// Nesting berries inside of fruits -push berries onto fruits
fruits.push(berries);
console.log(fruits);

// Now we can access 'blueberry' with the following,get the nested arrays index and then the index of blueberry
x = fruits[3][1];

// Create a new variable and nest both arrays inside the allFruits array
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Concatenate arrays take items from one array and adding into different array
x = fruits.concat(berries); // not nested array , berries added to fruits

// spread operator (...) - Concatenate all contents in one array with all contents of another array
x = [...fruits, ...berries];

// flat() - Flatten an array - takes the stuff out of nested and makes it all one level
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from("12345");

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
