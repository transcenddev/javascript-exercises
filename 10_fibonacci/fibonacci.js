const fibonacci = function(count) {
  // Convert string input to number
  count = parseInt(count);
  
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  
  let prev = 0;
  let current = 1;
  
  for (let i = 1; i < count; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
};

// Do not edit below this line
module.exports = fibonacci;