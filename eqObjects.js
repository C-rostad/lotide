//assertEqual for checking individual elements
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

};



const shirt = {
  color: "red",
  size: "medium"
};

const anotherShirt = {
  size: "medium",
  color: "red"
};

eqObjects(shirt, anotherShirt); // true

const longSleeveShirt = {
  size: "medium",
  color: "red",
  sleevelength: "long",
};


