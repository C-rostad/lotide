const head =  function(inputArray) {
  let returnValue;
    if (inputArray) {
      returnValue = inputArray[0];
    }
  
  console.log(returnValue);
  return returnValue;
};

const assertEqual = require("./assertEqual");

module.exports = head;