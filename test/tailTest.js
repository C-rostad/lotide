const tail = require("../tail");
const assert = require('chai').assert;



// console.log(tail([5,6,7,8,9,1])); //test tail function
// console.log(tail(["Testing one element in array"])); // test one element
// console.log(tail([])); // test empty array
// const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
// assertArraysEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


// assertEqual(tail(words)[0], "Lighthouse");

// assertEqual(tail(words).length, words.length - 1); //testing for length  of returned array;


// //testing for arrays with one element and arrays with no elements
// assertEqual(tail(["test"]).length, 0);
// assertEqual(tail([]).length, 0);


describe("#tail", () => {
  it("should return [`Lighthouse`, `Labs`] from [`Hello`, `Lighthouse`, `Labs`]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return an empty array when only one element", () => {
    assert.deepEqual(tail(["Testing one element in array"]), []);
  });
  it("should return an empty array when input array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});