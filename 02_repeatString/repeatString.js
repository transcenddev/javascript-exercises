
const repeatString = function (word, times) {
  // if number of times is negative display error
  if (times < 0) return "ERROR";
  // allowed empty text
  let string = "";

  // make the text repeat next to each other like hey to heyheyhey
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};


// my first try is spaghetti code tf
// // make the words repeat next to each other without spaces
// function repeatString(string, times) {
//   let repeatString = "";

//   if (times < 0) {
//     return 'ERROR';
//   } else if (string === '' ) {
//     while (times > 0) { // As long as times is greater than 0, the statement is executed
  
//       repeatString += string; // Same as repeatString = repeatString + string;
//       times--; // Same as times = times - 1;
//     }
//     /* While loop logic
//                         Condition       T/F       repeatString += string      repeatString        times
//       First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
//       Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
//       Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
//       Fourth iteration   (0 > 0)        false
//       }
//     */
    
//     // Step 3. Return the repeated string
//     return repeatString; // "abcabcabc"
//   }

//   while (times > 0) { // As long as times is greater than 0, the statement is executed
  
//     repeatString += string; // Same as repeatString = repeatString + string;
//     times--; // Same as times = times - 1;
//   }
//   /* While loop logic
//                       Condition       T/F       repeatString += string      repeatString        times
//     First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
//     Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
//     Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
//     Fourth iteration   (0 > 0)        false
//     }
//   */
  
//   // Step 3. Return the repeated string
//   return repeatString; // "abcabcabc"
// };


// Do not edit below this line
module.exports = repeatString;
