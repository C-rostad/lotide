
const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log("✅✅✅ Assertion Passed: The arrays are equal");
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: The arrays are not equal");
  }
 
};

module.exports = assertArraysEqual;
