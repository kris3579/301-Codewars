'use strict';

var gimme = function (inputArray) {
  let newArray = [];
  newArray.push(inputArray[0], inputArray[1], inputArray[2]);
  newArray.sort(function(a,b) {
    return(a - b);
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (newArray[1] === inputArray[i]) {
      return i;  
    }
  }
};

