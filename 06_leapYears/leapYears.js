// 1. understand the problem
// - check if the year is leap year with non century years, (1996, 1997)
// - ridiculously futuristic non century years (34992)
// - works with century years (1900, 1600, 700)

// 2. Plan
  // Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
  // What inputs will your program have? Will the user enter data or will you get input from somewhere else?
  // What’s the desired output?
  // Given your inputs, what are the steps necessary to return the desired output?

// 3. Pseudocode
  // if year is leap year return true;
  // else false;

// 4. Divide and Conquer
  // how do I check if a year is leap year? 
  // iif it is divisible by 4
  // how do I check if a year from future is leap year like 3992? not divisible by 100 but also divisible by 400
  // how do I check if a year in century years like 1900, 1700, 700? if it is divisible by 400
  // https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
  
const leapYears = function(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

// 
// Do not edit below this line
module.exports = leapYears;
