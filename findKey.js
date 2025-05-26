const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


//implement findKey, Week 2

const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  let returnKey;
  for (const keys of objectKeys) {
    if (callback(object[keys])) { //check if callback function has a truthy, if so return the first key to do so
      return keys;
    }
  }




  return returnKey;
};


const testObject = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const testCallback = (x) => x.stars === 2;

console.log(findKey(testObject, testCallback));

  
assertEqual(findKey(testObject, testCallback), "noma");
