// cap the first word in the sentence
function capitalizeWords(str) {
  return (
    str
      // make everything lower case
      .toLowerCase()
      // turn into array
      .split(" ")
      // for each words first letter make upper case and then add the rest of the word
      .map((word) => word[0].toUpperCase() + word.substr(1))
      // turn the array backinto a string
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
