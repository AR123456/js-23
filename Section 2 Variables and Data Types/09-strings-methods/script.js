let x;

const name = "John";
const age = 31;

// Concatenation
x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals - better more modern ad less confusiong way to concatonate
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a property or method on a primitive string)
// string constructor The String() constructor creates String objects. When called as a function, it returns primitive values of type String.   Warning: You should rarely find yourself using String as a constructor.   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

const s = new String("Hello World"); // type of object
const t = "Hello World"; // type sting

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

// Shows the prototype of the string object. Shows the properties and methods that can be used on strings
x = s.__proto__;

// Change case
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - returns the character at the specified index
x = s.charAt(0);

// indexOf - returns the index of the first occurrence of a specified value in a string , if more than one first one
x = s.indexOf("d");

// substring() - search a string for a specified value
x = s.substring(2, 5); // value from index 2 to index 5
x = s.substring(7); // value from index 7

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6); // slice from index 11 from end to 6 from end - return the values

// trim() - remove whitespace from beginning and end of string
x = "         Hello World";
x = x.trim();

// replace() - replace all instances of a string
x = s.replace("World", "John");

// includes() - returns true if the string is found within string true or false
x = s.includes("Hell");

// valueOf() - returns the primitive value of a variable
x = s.valueOf();

// split() - returns an array of strings, takes in a separator as an argument
x = s.split("");

console.log(x);
