
const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log("✅✅✅ Assertion Passed: The arrays are equal");
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal");
  }
 
};

module.exports = assertArraysEqual;
// assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // false
