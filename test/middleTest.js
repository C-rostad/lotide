
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual(middle([1,2,3]), [2]); //pass
assertArraysEqual(middle([1,2,3,4]), [2,3]); //pass
assertArraysEqual(middle([1]), []); //pass
assertArraysEqual(middle([]), []); //pass
