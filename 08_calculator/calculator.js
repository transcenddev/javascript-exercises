// 1. Understand the problem
// create a calculator that does the following: add, subtract, get the sum, multiply, get the power, and find the factorial

// 2. Plan
// it has no ui
// it has a given value to calculate
// 
// 3. Pseudocode

// 4. Divide and Conquer
// how do i compute the sum of one array? 
// how can I raise a number  to power in js? using the method => console.log(Math.pow(4, 3)) // 64
//  https://stackoverflow.com/questions/55319570/how-can-i-raise-a-number-to-power-in-javascript
// how to determine the factorial of a number? https://stackoverflow.com/questions/29338175/determining-factorial-of-a-number

const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  } return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
  } return product;
};

const power = function(number1, number2) {
	return (Math.pow(number1, number2))
};

const factorial = function(x) {
  let result = 1;
  for (let y = 1; y <= x; y++) {
    result = result * y;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
