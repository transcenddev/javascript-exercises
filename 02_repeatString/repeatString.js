// const repeatString = function() {

// };

// // Do not edit below this line
// module.exports = repeatString;

// make the words repeat next to each other without spaces
function repeatString(string, times) {
  let repeatString = "";

  while (times > 0) { // As long as times is greater than 0, the statement is executed
    repeatString += string; // Same as repeatString = repeatString + string;
    times--; // Same as times = times - 1;
  }
  /* While loop logic
                      Condition       T/F       repeatString += string      repeatString        times
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    }
  */
  
  // Step 3. Return the repeated string
  return repeatString; // "abcabcabc"
};

repeatString("hey", 3);
repeatString("hello", 11);
repeatString("hi", 1);
repeatString("bye", 0);


// Do not edit below this line
module.exports = repeatString;
