function truncateString (string, numChars) {
  // if string is longer than numChars, truncate to reduce its length to numChars, and append '...'
  if (string.length > numChars) {
    return string.slice(0,numChars) + '...'
  }
  else {
    return string
  } 
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely longer", 2));

