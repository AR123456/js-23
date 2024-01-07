/* 
## Challenge 3
**Instructions:**
Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.
**Expected Result:**
```JavaScript
const words = ['coder', 'programmer', 'developer'];
console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']
``` */
const words = ["coder", "programmer", "developer"];
// const capitalizedWords = words.map((word) => {
//   console.log(word.toLowerCase());
//   let capFirst = word[0].toUpperCase();
//   shortWord = word.slice(1);
//   console.log(capFirst + shortWord);
// });
const capitalizedWords = words.map((word) => {
  word.toLowerCase();
  let capFirst = word[0].toUpperCase();
  let shortWord = word.slice(1);
  console.log(capFirst + shortWord);
});
