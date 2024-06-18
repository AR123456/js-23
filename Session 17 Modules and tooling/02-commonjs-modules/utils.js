// cap the first word in the sentence
// function capitalizeWords(str) {
//   return (
//     str
//       // make everything lower case
//       .toLowerCase()
//       // turn into array
//       .split(" ")
//       // for each words first letter make upper case and then add the rest of the word
//       .map((word) => word[0].toUpperCase() + word.substr(1))
//       // turn the array backinto a string
//       .join(" ")
//   );
// }
// another way to make title case
function capitalizeWords(str) {
  return (
    str
      //Split string into array
      .split(" ")
      // use map to apply the function to each word in the array
      .map((word) => {
        // convert the first character of the word to uppercase, then use slice to convert the rest of the word to lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      // make the array into a string
      .join(" ")
  );
}

function makeMoney(amount) {
  return `$${amount}`;
}
// common js syntax for exporting
module.exports = {
  capitalizeWords,
  makeMoney,
};
