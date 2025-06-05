// 1. understand the problem
  // convert to celcius and farenheit 
  // it rounds to 1 decimal and works with negatives

  // convertToCelsius(32) // fahrenheit to celsius, should return 0
  // convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// 2. plan
  // Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
  // What inputs will your program have? Will the user enter data or will you get input from somewhere else?
  // What’s the desired output?
  // Given your inputs, what are the steps necessary to return the desired output?

// 3. pseudocode

  
// 4. divide and conquer
// fahrenheit to celsius, C = (°F - 32) × 5/9
// how can i round 1 decimal? https://stackoverflow.com/questions/7342957/how-do-you-round-to-one-decimal-place-in-javascript#:~:text=If%20you%20want%20it%20to,to%20number%20format%20parseFloat(number.
// 
// celsius to fahrenheit
// https://stackoverflow.com/questions/69861055/how-do-i-convert-temp-from-celsius-to-fahrenheit


const convertToCelsius = function(farenheit) {
  let convertCelcius = (farenheit - 32) * 5 / 9;
  const roundedCelcius = Math.round(convertCelcius * 10) / 10;
  return roundedCelcius;


  // return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  let convertFarenheit = (celcius * 9 / 5) + 32;
  const roundedFarenheit = Math.round(convertFarenheit * 10) / 10;
  return roundedFarenheit;

  // return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


// 