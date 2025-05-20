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
  let object1Keys = Object.keys(object1);
  object1Keys.sort();
  let object2Keys = Object.keys(object2);
  object2Keys.sort();
  let object1Values = Object.values(object1);
  object1Values.sort();
  let object2Values = Object.values(object2);
  object2Values.sort();

  //check if keys are equal length
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  //check if keys and values are the same
  for (let i = 0; i < object1Keys.length; i++) {
    if (object1Keys[i] !== object2Keys[i] || object1Values[i] !== object2Values[i]) {
      return false;
    }
  }
  return true;
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
assertEqual(eqObjects(shirt, anotherShirt), true);

const longSleeveShirt = {
  size: "medium",
  color: "red",
  sleevelength: "long",
};

eqObjects(shirt, longSleeveShirt); // false
assertEqual(eqObjects(shirt, longSleeveShirt), false);

const multiColorShirtObject = {
   colors: ["red", "blue"], 
   size: "medium" 
  };

const anotherMultiColorShirtObject = { 
  size: "medium", 
  colors: ["red", "blue"] 
};

eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);; // false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);