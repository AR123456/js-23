// forEach – just loops through, doesn’t return anything, executes the provided function

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// View prototype chain
// console.log(socials.__proto__);

// Long form - pass in the anonymous function - you can call this anything, just represents each item in the array. Could call it the singular version of the array. Or just item
socials.forEach(function (item) {
  // console.log(item); // array has 4 items, will run 4 times and log the items in the array.
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in other arguments like the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Linkedin", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObjs.forEach((item) => console.log(item));
socialObjs.forEach((item) => console.log(item.url)); // have access to the values of in the key value pairs of the object
