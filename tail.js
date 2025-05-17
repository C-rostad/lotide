const tail = function(inputArray) {
  let returnArray = [];
  if (inputArray.length > 1){
    returnArray = inputArray.slice(1);
  }
  return returnArray;
};

console.log(tail([5,6,7,8,9,1])); //test tail function
console.log(tail(["Testing one element in array"])); // test one element
console.log(tail([])); // test empty array


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

