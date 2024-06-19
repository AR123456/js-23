function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

function makeMoney(amount) {
  return `$${amount}`;
}
// using the { } since more than one not the default seperate by ,
export { capitalizeWords, makeMoney };
