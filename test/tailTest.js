const tail = require("../tail");
const assert = require('chai').assert;

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