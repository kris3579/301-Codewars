'use strict';

function insertDash(num) {
  let newString = '';
  let dashedString = num.toString();
  for (let i = 0; i < dashedString.length; i++) {
    newString = newString + dashedString[i];
    if (dashedString[i] % 2 !== 0 && dashedString[i + 1] % 2 !== 0 && i + 1 < dashedString.length) {
      newString = newString + '-';
    }
  }
  return newString;
};