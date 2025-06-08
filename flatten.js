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

const flatten = function(array) {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        returnArray.push(array[i][j]);
      }
    } else {
      returnArray.push(array[i]);
    }

  }
  return returnArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;