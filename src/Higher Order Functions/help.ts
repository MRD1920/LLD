function reverseWords(sentence: string) {
  let words = [];
  let word = "";

  // Iterate through each character in the sentence
  for (let i = 0; i <= sentence.length; i++) {
    if (i === sentence.length || sentence[i] === " ") {
      // End of a word
      words.push(word);
      word = "";
    } else {
      // Build the current word character by character
      word += sentence[i];
    }
  }

  // Reverse the order of words
  let reversedSentence = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i];
    if (i !== 0) {
      reversedSentence += " ";
    }
  }

  return reversedSentence;
}

// Example usage
let originalSentence = "My name is Arif";
let reversedSentence = reverseWords(originalSentence);
console.log(reversedSentence); // Output: "Arif is name My"

// Business ke bare me puch comapny ka
// Rating out of 5
