'use strict';

function mutateMyStrings(stringOne, stringTwo) {
  let splitOne = stringOne.split('');
  let splitTwo = stringTwo.split('');
  let ret = stringOne;
  for (let i = 0; i < stringOne.length; i++) {
    if (splitOne[i] !== splitTwo[i]) {
      splitOne[i] = splitTwo[i];
      ret += '\n' + splitOne.join('');
    }
  }
  return ret + '\n';
}