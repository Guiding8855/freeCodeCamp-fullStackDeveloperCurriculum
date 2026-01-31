let input = 4;
let fibonacciArr = [0, 1];
let nextFibonacciNum = 0;

// fibonacci sequence: 0, 1, 1, 2, 3, 5, 8...

// need a loop to calculate the next fibonacci number
for (let i = 1; fibonacciArr[i] <= input; i++) {
  console.log(i);
  nextFibonacciNum = fibonacciArr[i - 1] + fibonacciArr[i];
  console.log(nextFibonacciNum);
  fibonacciArr.push(nextFibonacciNum);
  console.log(fibonacciArr);
};

// test if the number is odd - modulo will be greater than 0

// add that to a cumulative sum

// return the value