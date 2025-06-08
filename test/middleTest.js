const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [2],the middle element for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns [2,3], the middle two elements, for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it("returns an empty array when only one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array when only two elements", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it("returns an empty array when no elements", () => {
    assert.deepEqual(middle([]), []);
  });
  it("should not modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    middle(words);
    assert.strictEqual(words.length, 3);
  });

});