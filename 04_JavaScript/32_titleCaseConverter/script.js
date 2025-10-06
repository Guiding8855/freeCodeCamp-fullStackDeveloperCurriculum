function titleCase(str) {
  let returnArr = [];

  // lowerCase the whole string and split the string into an array of words
  let splitStr = str.toLowerCase().split(" ");
  
  // loop through each word in the array
  for (const word of splitStr) {
    let returnStr = "";
    // loop through the characters of the word
    for (let i = 0; i <= word.length - 1; i++) {
      // uppercase index 0 (the first character)
      if (i === 0) {
        returnStr += word[i].toUpperCase();
      } else {
        returnStr += word[i];
      }
    }
    returnArr.push(returnStr);
  }

  // join the array back together and return
  return returnArr.join(" ");

}

// test cases
console.log(titleCase("I'm a little tea pot")); // expect: "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt")); // expect: "Short And Stout"
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // expect: "Here Is My Handle Here Is My Spout"