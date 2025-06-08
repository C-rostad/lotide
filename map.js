//Implement map - Week 2

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];

  for (let item of array) { //iterate through array
    result.push(callback(item)); //perform callback function on array
  }

  return result;
};

const results1 = map(words, (word) => word[0]);

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || typeof array1[i] !== typeof array2 [i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log("The arrays are equal");
  } else {
    return console.log("The arrays are not equal");
  }
 
};


const results2 = map([]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, []);

module.exports = map;