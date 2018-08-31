'use strict';

function capitalize(s,arr) {
  let newString = '';
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(i)) {
      newString += s.charAt(i).toUpperCase();
    } else {
      newString += s.charAt(i);
    }
  }
  return newString;
};