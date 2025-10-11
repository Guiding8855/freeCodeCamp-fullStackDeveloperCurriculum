function uniteUnique(arr1, arr2, ...restArray) {
  // bring all the input arguments into a single array
  let inputArgs = [...arguments];
  let returnArr = [];

  // loop over the input arguments array
  for (const arr in inputArgs) {
    // loop over the items in each array
    for (const item in inputArgs[arr]) {
      // if returnArr does not already include that value, push it into returnArr
      if (!returnArr.includes(inputArgs[arr][item])) {
        returnArr.push(inputArgs[arr][item]);
      }
    };
  }

  return returnArr;
};

// test cases
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // expect: [1, 3, 2, 5, 4] - pass
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // expect: [1, 3, 2, 5] - pass
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // expect: [1, 2, 3, 5, 4, 6, 7, 8] - pass
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // expect: [1, 3, 2, 5, 4, 6] - pass
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // expect: [1, 3, 2, 5, 4] - pass