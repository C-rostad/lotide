//Implement takeUntil, Week 2

const takeUntil = function(array, callback) {
  const returnArray = []; //define returnArray
  for (const element of array) { // iterate through array
    if (callback(element)) { //check if callback is true
      return returnArray; //end loop if callback is true
    } else {
      returnArray.push(element); //add element to returnArray
    }
  }



  return returnArray;
};





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);




const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');



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



const results3 = takeUntil([], x => x > 2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); //true
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]); //true
assertArraysEqual(results3, []); //true



