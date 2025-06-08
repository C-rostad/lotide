const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let returnObject = {};
  for (const value of sentence) {
    if (returnObject[value]) {
      returnObject[value] += 1;
    } else {
      if (value !== " ") {
        returnObject[value] = 1;
      }
    }
  }
  return returnObject;
};

const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);

const result2 = countLetters('Lighthouse Labs');
assertEqual(result2['L'], 2);
assertEqual(result2['i'], 1);
assertEqual(result2['g'], 1);


module.exports = countLetters;