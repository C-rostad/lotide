# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @C-rostad/lotide`

**Require it:**

`const _ = require('@C-rostad/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:



  head(inputArray): returns the first element of an array
  tail(inputArray): returns a new array with the first element removed
  middle(inputArray): returns the middle element of an array, the middle two if there is an even number of elements
  assertArraysEqual(arrayOne, arrayTwo): console logs whether or not two arrays are equal
  assertEqual(actual, expected): console logs whether two values are equal
  assertObjectsEqual(object1, object2): console logs whether two objects are equal
  countLetters(sentence): returns an object with the amount of times each letter appears in the string
  countOnly(allItems, itemsToCount): returns an object with the amount of times an item appears in the allItems array based on the itemsToCount 
  eqArrays(array1, array2): returns true if both arrays are equal
  eqObjects(object1, object2): returns true if both objects have identical keys with identical values
  findKey(object, callback): returns the first key in the object that has a truthy value;
  findKeyByValue(object, value): returns the key in the object based on the input value;
  letterPositions(sentence): returns an object with all indices for each character found in the string
  takeUntil(array, callback): populates an returns a new array with all values until the callback truty value is false
  without(arrayOne, arrayTwo): returns a new array with all values from arrayTwo removed from arrayOne