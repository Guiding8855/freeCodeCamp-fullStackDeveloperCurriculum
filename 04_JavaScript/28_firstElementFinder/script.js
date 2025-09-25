function findElement(arr, func) {

};

// test cases
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) {return num % 2 === 0;})); // expect: 8
console.log(findElement([1, 3, 5, 9], function(num) {return num % 2 === 0;})); // expect: undefined
console.log(findElement([1, 2, 3, 4], function(num) {return num > 2;})); // expect: 3
console.log(findElement(["hello", "world", "javascript"], function(str) {return str.length > 5;})); // expect: "javascript"
console.log(findElement(["cat", "dog", "bird"], function(str) {return str.length > 10;})); // expect: undefined
console.log(findElement([2, 4, 6, 8], function(num) {return num % 2 === 0;})); // expect: 2
console.log(findElement([], function(num) {return num > 0;})); // expect: undefined