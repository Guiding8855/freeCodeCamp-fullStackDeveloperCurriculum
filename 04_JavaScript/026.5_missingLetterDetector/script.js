// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have a function named fearNotLetter.
// The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
// The function should find the missing letter in the passed letter range and return it.
// If all letters are present in the range, the function should return undefined.

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function fearNotLetter (string) {
  // split the string into an array
  const splitString = string.split("");

  // find index of the first letter of the string in alphabet array
  var firstLetterIndex = 0;
  for (const index in alphabet) {
    if (splitString[0] === alphabet[index]) {
      firstLetterIndex = index;
    }
  };

  // loop over the string.length, and compare each until you find a letter that does not match
  for (let i = 0; i <= string.length - 1; i++) {
    if (splitString[i] !== alphabet[firstLetterIndex]) {
      return alphabet[firstLetterIndex];
    } else {
      // increment the alphabet letter index
      firstLetterIndex++;
    }
  }

};

// test cases
console.log(fearNotLetter("abce")); // expected result: d;
console.log(fearNotLetter("abcdefghjklmno")); // expected result: i;
console.log(fearNotLetter("stvwx")); // expected result: u; 
console.log(fearNotLetter("bcdf")); // expected result: e;
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // expected result: undefined;