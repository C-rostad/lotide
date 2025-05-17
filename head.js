const head =  function(inputArray) {
  let returnValue;
  for (let i = 0; i < inputArray.length; i++) {
    if (i === 0) {
      returnValue = inputArray[i];
    }
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