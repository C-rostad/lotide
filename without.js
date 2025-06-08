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
  if (eqArrays(arrayOne, arrayTwo) === true) {
    return console.log("The arrays are equal");
  } else {
    return console.log("The arrays are not equal");
  }
 
};

const without = function(source, itemsToRemove) {
  let returnArray = [];
  for (let i = 0; i < source.length; i++) {
    let push = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j] || typeof source[i] !== typeof itemsToRemove[j]) {
        push = false;
      }
      if (push) {
    returnArray.push(source[i]);
    }
    push = true;
    }
  }
  return returnArray;
};



assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;