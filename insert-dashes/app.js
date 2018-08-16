'use strict';

let num = '7348579';
let finalNum;
function insertDash(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      if (num[i] % 2 !== 0) {
        let numbersString = num.slice(0, i) + '-' + num.slice(i, num.length);
        finalNum = numbersString;
      };
    };
    return finalNum;
  };
};