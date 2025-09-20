// declare a num variable and assign it to a number between 1 and 20
var num = 6;

// create a function named factorialCalculator that takes a number as an argument and returns the 
// factorial of that number
function factorialCalculator(number) {

  // inside the function, declare a result variable and assign it the value of 1
  var result = 1;

  // using a loop, loop through all numbers from 1 to the input number (inclusive), and multiply the
  // result variable by the current number and assign it to the result variable
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
};

// call the factorial calculator with num as the argument and assign the result to the variable factorial
var factorial = factorialCalculator(num);

// store the final output in resultMsg
var resultMsg = `Factorial of ${num} is ${factorial}`;

// output resultMsg in the console
console.log(resultMsg);
