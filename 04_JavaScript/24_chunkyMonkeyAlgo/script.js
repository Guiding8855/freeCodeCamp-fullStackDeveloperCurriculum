// Write a function named chunkArrayInGroups that takes an array as first argument and a number as 
// second argument. The function should split the array into smaller arrays of length equal to the 
// second argument and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, num) {
  // initialise a return array
  let chunkedArr = [];
  let startIndex = 0;
  let endIndex = num;
  let numGroups = Math.ceil(arr.length / num);
  
  // loop over the array
  for (let i = 1; i <= numGroups; i++) {
    // slice from position 0 to num
    var arrSlice = arr.slice(startIndex, endIndex);
    // push this sliced array into the return array
    chunkedArr.push(arrSlice);
    // increment the startIndex and endIndex
    startIndex += num;
    endIndex += num;;
  }

  // return the new array
  return chunkedArr;
};

// test cases
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
