function largestOfAll(arrOfArrs) {
  // define an empty array to hold the output
  let returnArr = [];

  // loop through array of arrays
  for (let arr in arrOfArrs) {

    // create a var to hold the largest number in the array
    // initialise it to the first value in the array
    let largestNum = arrOfArrs[arr][0];

    // loop through each element of the array
    for (let i = 0; i <= arrOfArrs[arr].length; i++) {

      // overwrite the largestNum if the element is bigger than the one that is there
      if (arrOfArrs[arr][i] >= largestNum) {
        largestNum = arrOfArrs[arr][i];
      } 
    }

    returnArr.push(largestNum);
  } 

  return returnArr;
};

// test cases
console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // expect: [27, 5, 39, 1001]
console.log(largestOfAll([[4, 9, 3, 1], [13, 35, 18, 26], [32, 35, 97, 39], [10000000, 1001, 857, 1]])); // expect: [9, 35, 97, 1000000]
console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // expect: [25, 48, 21, -3]