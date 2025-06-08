//eqArrays for checking values when object has an array
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  let object1Values = Object.values(object1);
  let object2Values = Object.values(object2);
  object1Keys.sort();
  object2Keys.sort();
  object1Values.sort();
  object2Values.sort();

  //check if keys are equal length
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  //check if keys and values are the same
  for (let i = 0; i < object1Keys.length; i++) {
    if (Array.isArray(object1Values[i]) && Array.isArray(object2Values[i])) { //check if both object values are arrays
      if (object1Values[i].length !== object2Values[i].length) {
        return false;
      } else if (eqArrays(object1Values[i], object2Values[i]) === false) { // refactor into || if statement when working
        return false;
      }

    } else if (Array.isArray(object1Values[i]) || Array.isArray(object2Values[i])) { // if only one of the object values are arrays, return false
      return false;
    }

    if (object1Keys[i] !== object2Keys[i] || object1Values[i] !== object2Values[i]) {
      // console.log(object1Keys[i]);
      // console.log(object2Keys[i]);
      // console.log(object1Values[i]);
      // console.log(object2Values[i]);
      return false;
    }
  }
  return true;
};



//implementing assertObjectsEqual
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    const inspect = require("util").inspect;
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



const testone = {
  a: '1',
  b: 2
};

const testTwo = {
  b: 2,
  a: '1'
};

assertObjectsEqual(testone, testTwo);

module.exports = assertObjectsEqual;