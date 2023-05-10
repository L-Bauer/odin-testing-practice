function capitalize(word) {
  // Make all letters lowercase
  const lowerWord = word.toLowerCase();
  // Make string an array
  const chars = lowerWord.split("");
  // Get first letter and make it upper case
  const firstLetter = chars[0].toUpperCase();
  // Combine the first upper case letter to array
  chars[0] = firstLetter;
  return chars.join("");
}

export default capitalize;
