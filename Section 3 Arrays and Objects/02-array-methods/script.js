let x;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
arr.push(100);

// pop() - Take the last value off
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Remove first value
arr.shift();

// reverse() - Reverse an array
arr.reverse();

// includes() - Check to see if something is in the array - returns true or false
x = arr.includes(445);

// indexOf() - Return the index of the first match to the value passed in
// if a value that is passed in is not found in the array indexOf() returns -1
x = arr.indexOf(28);

// Return array as a string
x = arr.toString();
x = arr.join();

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array. The original array remains intact
x = arr.slice(1, 4);

/// splice
let y;
const arrY = [28, 38, 44, 29, 109];
// splice() works like slice() except it takes the index of the first element and the number of elements after the  one at the provided index, to remove as a second argument.  it also mutates the original array where slice() does not
y = arrY.splice(1, 4);
console.log(y, arrY);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
