'use strict';

function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
  }
  let mappedArray = arr.map(x => x * x * x);
  let filtered2Array = mappedArray.filter(x => x % 2 === 1 || x % 2 === -1);
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return filtered2Array.reduce(reducer, 0);
}