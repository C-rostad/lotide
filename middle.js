


const middle = function(array) {
  const returnArray = [];
  if (array.length <= 2) {
    return returnArray;
  }
  if (array.length % 2 === 1) {
    const middle = (array.length + 1) / 2;
    returnArray.push(array[middle - 1]);
  } else if (array.length > 1) {
    const middle = array.length / 2;
    returnArray.push(array[middle - 1]);
    returnArray.push(array[middle]);
  }
  return returnArray;
};

module.exports = middle;