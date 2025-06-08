const middle = function(array) {
  const returnArray = [];
  if (array.length <= 2) {
    return returnArray;
  }
  if (array.length % 2 === 1) {
    const middleIndex = (array.length + 1) / 2;
    returnArray.push(array[middleIndex - 1]);
  } else if (array.length > 1) {
    const middleIndex = array.length / 2;
    returnArray.push(array[middleIndex - 1]);
    returnArray.push(array[middleIndex]);
  }
  return returnArray;
};
module.exports = middle;