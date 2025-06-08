// assertEqual for testing purposes
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let objectKeys = Object.keys(object);
  for (const keys of objectKeys) {
    if (object[keys] === value) {
      return keys;
    }
  }
};





const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const testObject = {
  emptyString: "",
  emptyArray: [],
};

assertEqual(findKeyByValue(testObject, ""), "emptyString");
assertEqual(findKeyByValue(testObject, []), undefined);

module.exports = findKeyByValue;