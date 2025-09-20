/*
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

1. Create a function named mutation that takes an array as its argument.
2. mutation should return true if the string in the first element of the array contains all of the 
letters of the string in the second element of the array, and false otherwise. For example:
  - mutation(["hello", "Hello"]), should return true because all of the letters in the second string
  are present in the first, ignoring case.
  - mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
  - mutation(["Alien", "line"]), should return true because all of the letters in line are present 
  in Alien.
*/

function mutation(arr) {
  // extract each element of the array and convert to lowercase  
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();

  // initialise counter variable
  let match = 0;

  // loop over each character in string2
  for (const char in string2) {
    // if string1 contains that character in string2, increment the counter
    if (string1.includes(string2[char])) {
      match++;
    }
  }

  // if the length of string2 equals the counter, then all of the letters in string2 are in string1
  // thus, string2 is a mutation of string1
  return string2.length === match;
};

// test arrays
var arr1 = ["hello", "hey"];
var arr2 = ["hello", "Hello"];
var arr3 = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
var arr4 = ["Mary", "Army"];
var arr5 = ["Mary", "Aarmy"];
var arr6 = ["Alien", "line"];
var arr7 = ["floor", "for"];
var arr8 = ["hello", "neo"];
var arr9 = ["voodoo", "no"];
var arr10 = ["ate", "date"];
var arr11 = ["Tiger", "Zebra"];
var arr12 = ["Noel", "Ole"];

// run tests
console.log(mutation(arr1));
console.log(mutation(arr2));
console.log(mutation(arr3));
console.log(mutation(arr4));
console.log(mutation(arr5));
console.log(mutation(arr6));
console.log(mutation(arr7));
console.log(mutation(arr8));
console.log(mutation(arr9));
console.log(mutation(arr10));
console.log(mutation(arr11));
console.log(mutation(arr12));