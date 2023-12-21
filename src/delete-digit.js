const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const nArr = n.toString().split('')
    let k = nArr[0]
    let i = 1

    while ((nArr.length > 1) && Number(k) >= Number(nArr[i])){
      k = nArr[i];
      i += 1;
    }
    nArr.splice(i-1,1)
  return Number(nArr.join(''))
  
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
