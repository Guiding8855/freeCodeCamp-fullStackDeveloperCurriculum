function sumAll(arr) {
  let sum = 0;

  // order the two input array numbers
  let min = arr[0] <= arr[1] ? arr[0] : arr[1];
  let max = arr[0] > arr[1] ? arr[0] : arr[1];

  // loop from min to max, adding each number to a cumulative sum
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// test cases
console.log(sumAll([1,4])) // expect: 10 - pass
console.log(sumAll([4,1])) // expect: 10 - pass
console.log(sumAll([5,10])) // expect: 45 - pass
console.log(sumAll([10,5])) // expect: 45 - pass