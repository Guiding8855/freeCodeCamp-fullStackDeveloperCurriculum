function bouncer(arr) {
  let returnArr = [];

  // loop through values of the input arr
  for (const value of arr) {
    // if the value (implicit conversion to boolean), then push it into the return array
    if (value) {
      returnArr.push(value);
    }
  }

  return returnArr
};

// test cases
console.log(bouncer([7, "ate", "", false, 9])) // expect: [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])) // expect: ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])) // expect: [].
console.log(bouncer([null, NaN, 1, 2, undefined])) // expect: [1, 2].
console.log(bouncer([])) // expect: [].