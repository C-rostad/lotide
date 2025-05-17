const head =  function(inputArray) {
  let returnValue;
    if (inputArray) {
      returnValue = inputArray[0];
    }
  
  console.log(returnValue);
  return returnValue;
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};



assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");