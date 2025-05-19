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
