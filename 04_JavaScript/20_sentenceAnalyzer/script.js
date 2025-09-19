// functions - my implementations
function getVowelCount(sentence) {
  var count = 0;

  for (let letter of sentence.toLowerCase()) {
    if (letter === "a" || 
        letter === "e" || 
        letter === "i" || 
        letter === "o" || 
        letter === "u") {
      count++;
    }
  }
  return count;
};

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    };
  }
  return count;
};

function getPunctuationCount(sentence) {
  // match anything that is not (^) an alphanumeric or underscore (\w), or a whitespace char (\s) 
  const regex = /[^\w\s]+/g;
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (char.match(regex)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence) {
  // if the sentence is an empty string or just spaces, return 0 words
  if (sentence.trim().length === 0) {
    return 0;
  } else {
    // otherwise, break up the sentence at the spaces and return the array length
    return sentence.trim().split(" ").length;
  }
};

// solution implementations
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);