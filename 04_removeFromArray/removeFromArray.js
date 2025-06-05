   // 1. understand the problem
   // remove multiple values in array
   // [1, 2, 3, 4], 3, 2) expected out put [1,4]
   // it's not a normal array 

   // 2. breakdown the problem
   // I receive multiple and values in array
   // return new array that exclude those values
   // the function should handle different data types 

   // 3. write a plan pseudo code
   // accept an array and a variable numbers of arguments
   // loop through an array and remove the values that match the additional arguments
   // return modified array.


// accept array of the rest of the arguments that are passed to a function
// using ...args will access the other arrays 
const removeFromArray = function(array ,...args) {
   
   return array.filter(item => !args.includes(item));

   // filter() satisfy the condition to remove
   // !args.includes reverse the condition so it is not include the item in the output array.
};



// Do not edit below this line
module.exports = removeFromArray;

// npm test removeFromArray.spec.js