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


const middle = function(array) {
  let returnArray = [];
  if (array.length <= 2) {
    return returnArray;
  }
  if (array.length % 2 === 1) {
    let middle = (array.length + 1) / 2;
    returnArray.push(array[middle - 1]);
  } else {
    let middle = array.length / 2;
    returnArray.push(array[middle - 1]);
    returnArray.push(array[middle]);
  }
  return returnArray;
};
