function frankenSplice(arr1, arr2, index) {
  // copy arr2 into a new array so it isn't overwritten
  const returnArr = [...arr2];
  // loop over arr1, inserting the values one at a time from index using splice, and incrementing the index value
  for (let i = 0; i <= arr1.length - 1; i++) {
    returnArr.splice(index, 0, arr1[i]);
    index++;
  }
  return returnArr;
};

// test cases
console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // expect: [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // expect: ["a", 1, 2, "b"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); // expect: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice([1, 2, 3, 4], [], 0)); // expect: [1, 2, 3, 4]