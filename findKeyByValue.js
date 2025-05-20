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
  console.log(objectKeys);
  let returnValue;
  for (const keys of objectKeys) {
    console.log(keys);
    if (keys === value) {
      returnValue = keys;
    }
  }
  return returnValue;
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

assertEqual(findKeyByValue(testObject, ""), undefined);
assertEqual(findKeyByValue(testObject, []), undefined);