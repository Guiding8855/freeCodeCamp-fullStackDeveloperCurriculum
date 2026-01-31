function sumFibs(input) {

  let fibonacciArr = [0, 1];
  let nextFibonacciNum = 0;

  // fibonacci sequence: 0, 1, 1, 2, 3, 5, 8...
  // calculate the next fibonacci number up to the input number
  for (let i = 1; fibonacciArr[i] <= input; i++) {
    // console.log("Loop: " + i);
    // console.log("Last Fibonacci number: " + fibonacciArr[i]);
    nextFibonacciNum = fibonacciArr[i - 1] + fibonacciArr[i];
    // console.log("Next Fibonacci number: " + nextFibonacciNum);
    fibonacciArr.push(nextFibonacciNum);
    // console.log(fibonacciArr);
  };

  // test if the number is odd - modulo will be greater than 0
  let cumSum = 0;
  for (const num in fibonacciArr) {
    // add that to a cumulative sum
    if (fibonacciArr[num] <= input  && fibonacciArr[num] % 2 > 0) {
      // console.log(fibonacciArr[num]);
      cumSum += fibonacciArr[num];
    };
  }
  // console.log(cumSum);

  // return the value
  return cumSum;
};

// test cases
console.log(sumFibs(1)); // expected result: 2 - pass;
console.log(sumFibs(1000)); // expected result: 1785 - pass;
console.log(sumFibs(4000000)); // expected result: 4613732 - pass;
console.log(sumFibs(4)); // expected result: 5 - pass;
console.log(sumFibs(75024)); // expected result: 60696 - pass;
console.log(sumFibs(75025)); // expected result: 135721 - pass;