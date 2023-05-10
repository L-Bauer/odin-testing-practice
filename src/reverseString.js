function reverseString(word) {
  const chars = word.split("");
  const reverseChars = chars.reverse();
  const reverseWord = reverseChars.join("");
  return reverseWord;
}

export default reverseString;
