'use strict';

function high(x) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let tester = x.split(' ');
  let highest = 0;
  let highWord = '';
  for (let i = 0; i < tester.length; i++) {
    let temp = 0;
    for (let j = 0; j < tester[i].length; j++) {
      temp += alphabet.indexOf(tester[i][j]) + 1;
    }
    if (highest < temp) {
      highest = temp;
      highWord = tester[i];
    }
  }
  return highWord;
}