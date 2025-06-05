// 1. Understand
  // Write a function that determines whether or not a given string is a palindrome.
  // A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:
  // some palindromes:
    // A car, a man, a maraca.
    // Rats live on no evil star.
    // Lid off a daffodil.
    // Animal loots foliated detail of stool lamina.
    // A nut for a jar of tuna.
// 2. Plan
  // take a string as input
  // determine if the string is palindrome
  // ignores punctiations, spaces and capitalization
// 3. Pseudocode
  


// 4. Divide and Conquer

// references
// https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript
// https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript/25091111#25091111

const palindromes = function(string) {
  // Convert to lowercase and remove all non-alphanumeric characters
  const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare with its reverse
  return cleanString === cleanString.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;

