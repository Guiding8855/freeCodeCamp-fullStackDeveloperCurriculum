function findLongestWordLength (string) {
  // store the longest word length in a variable
  var maxCharCount = 0;

  // split the string into an array of words
  var arr = string.trim().split(" ");

  // loop over the array, for each word in the array, count the number of characters
  for (const word in arr) {
    var wordLength = arr[word].length;

    // overwrite maxCharCount if a longer word is encountered
    if (wordLength > maxCharCount) {
      maxCharCount = wordLength;
    }
  }

  // return the variable
  return maxCharCount;
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // expect 6
console.log(findLongestWordLength("May the force be with you")); // expect 5
console.log(findLongestWordLength("Google do a barrel roll")); // expect 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // expect 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // expect 19
