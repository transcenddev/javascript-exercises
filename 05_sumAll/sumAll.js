// 1. understand the problem
  
// sum all the numbers within the range of 2 numbers, large numbers, larger number first
// returns ERROR with negative numbers, non-integer parameters, Non-number parameters

// 2. Plan
  // Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
  // What inputs will your program have? Will the user enter data or will you get input from somewhere else?
  // What’s the desired output?
  // Given your inputs, what are the steps necessary to return the desired output?

// 3. Pseudocode

  // if the input is negative number or non-integer parameters or non-number parameter 
  // return error
  // else sum all the numbers within the range of 2 numbers, large numbers, larger number first

// 4. Divide and Conquer
  // how do I return ERROR if parameter is negative? non-integer? non-number parameter?
  // how to sum all the numbers?
  // how can I sum the 2 values in parameter when the start is larger number first

const sumAll = function(min, max) {
  // check if either min & max is integer
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  // check if either min or max is negative
  if (min < 0 || max < 0) return "ERROR";
  // swapping values if min is greater than max
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  // alternative swap using array destructuring
// if (min > max) [min, max] = [max, min];

// loop through the range and sum of numbers
  let sum = 0;
  for (i = min; i <= max; i++) {
    sum += i;
  }
  return sum
};



// Do not edit below this line
module.exports = sumAll;

