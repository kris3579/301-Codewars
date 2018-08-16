'use strict';

let testNum = '7348579';
function insertDash(num) {
  let newString = '';
  for (let i = 0; i < num.length; i++) {
    newString = newString + num[i];
    if (num[i] % 2 !== 0) {
      if (num[i + 1] % 2 !== 0) {
        newString = newString + '-';
      };
    };
  };
  return newString;
};