// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = "developer";

let myNewString;
// substring(1) gets everything from 1 to the right
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);
