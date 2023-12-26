function replaceWithRot13(input) {
  // Define arrays for uppercase and lowercase English alphabets
  const uppercaseAlphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  const lowercaseAlphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
  );

  // Define a helper function to shift a single character by 13 positions
  function shiftChar(char, alphabet) {
    const index = alphabet.indexOf(char);
    // Check if the character is in the alphabet
    if (index !== -1) {
      // Calculate the new index after shifting by 13 positions and wrap around if necessary
      return alphabet[(index + 13) % 26];
    }
    // If the character is not in the alphabet, return it unchanged
    return char;
  }

  // Iterate through each character and replace it with the rotated one
  const result = input
    .split("")
    .map((char) => {
      // Check if the character is uppercase or lowercase and use the corresponding alphabet
      const alphabet = /[A-Z]/.test(char)
        ? uppercaseAlphabet
        : lowercaseAlphabet;
      return shiftChar(char, alphabet);
    })
    .join("");

  return result;
}

// Example: Replace each letter in "banana" with the letter 13 positions later
const originalWord = "banana";
const rotatedWord = replaceWithRot13(originalWord);

console.log(rotatedWord);
