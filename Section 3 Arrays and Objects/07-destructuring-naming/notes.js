// Array destructuring
//here’s an example of how an array is destructured into variables:

// we have an array with the name and surname
let arr = ["John", "Smith"];
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname); // Smith
// can also combine with split or other array returning methods
// let [fName, lName] = "John Smith".split(" ");
let [fName, lName] = "John Smith".split();
console.log(fName);
console.log(lName);
