'use strict';

let test = [2, 3, 1];

var gimme = function (inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i + 2]) {
      let otherIndex1 = inputArray[i + 1];
      let otherIndex2 = inputArray[i + 2];
      if (otherIndex1 < inputArray[i] && otherIndex2 > inputArray[i]) {
        return inputArray.indexOf(inputArray[i]);
      } else if (otherIndex1 > inputArray[i] && otherIndex2 < inputArray[i]) {
        return inputArray.indexOf(inputArray[i]);
      }
    } else if (inputArray[i - 2]) {
      let otherIndex1 = inputArray[i - 1];
      let otherIndex2 = inputArray[i - 2];
      if (otherIndex1 < inputArray[i] && otherIndex2 > inputArray[i]) {
        return inputArray.indexOf(inputArray[i]);
      } else if (otherIndex1 > inputArray[i] && otherIndex2 < inputArray[i]) {
        return inputArray.indexOf(inputArray[i]);
      }
    } else {
      let otherIndex1 = inputArray[i - 1];
      let otherIndex2 = inputArray[i + 1];
      if (otherIndex1 < inputArray[i] && otherIndex2 > inputArray[i]) {
        return inputArray.indexOf(inputArray[i]);
      } else if (otherIndex1 > inputArray[i] && otherIndex2 < inputArray[i]) {
        return inputArray.indexOf(inputArray[i]);
      }
    }
  }
};