/*
In this lab, you will create a function that repeats a given string a specific number of times. 
For the purpose of this lab, do not use the built-in .repeat() method.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

1. You should create a function named repeatStringNumTimes that takes two parameters: a string and a
  number.
2. The function should return the string repeated the specified number of times.
3. If the number is less than or equal to zero, the function should return an empty string.
*/

function repeatStringNumTimes(string, number) {
  let resultStr = "";

  for (let i = 1; i <= number; i++) {
    resultStr += string;
  }

  return resultStr;
};

// tests
console.log(repeatStringNumTimes("*", 3)); // ***
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("abc", 4)); // abcabcabcabc
console.log(repeatStringNumTimes("abc", 1)); // abc
console.log(repeatStringNumTimes("*", 8)); // ********
console.log(repeatStringNumTimes("abc", -2)); // ""
console.log(repeatStringNumTimes("abc", 0)); // ""
