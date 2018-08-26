'use strict';

function find_average(array) {
  var result = array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
  return result;
}