function replaceWithRot13(input) {
  // Define a helper function to shift a single character by 13 positions
  function shiftChar(char) {
    const isUpperCase = char === char.toUpperCase();
    const baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
    return String.fromCharCode(
      ((char.charCodeAt(0) - baseCharCode + 13) % 26) + baseCharCode
    );
  }

  // Iterate through each character and replace it with the rotated one
  const result = input
    .split("")
    .map((char) => {
      // t uses the map function to iterate over each character, applying the shiftChar function to letters and leaving non-letter characters unchanged.
      if (/[A-Za-z]/.test(char)) {
        return shiftChar(char);
      } else {
        return char; // If it's not a letter, leave it unchanged
      }
    })
    .join("");

  return result;
}

// Example: Replace each letter in "banana" with the letter 13 positions later
const originalWord = "banana";
const rotatedWord = replaceWithRot13(originalWord);

console.log(rotatedWord);
