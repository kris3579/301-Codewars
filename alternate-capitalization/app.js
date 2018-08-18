'use strict';

function capitalize(s){
  let stringArr = s.split('');
  let aArr = [];
  let bArr = [];
  for (let i = 0; i < stringArr.length; i += 2) {
    aArr.push(stringArr[i].toUpperCase());
    bArr.push(stringArr[i]);
    if (stringArr[i + 1]) {
      aArr.push(stringArr[i + 1]);
      bArr.push(stringArr[i + 1].toUpperCase());
    }
  };
  let aString = aArr.join('');
  let bString = bArr.join('');
  return [aString, bString];
};