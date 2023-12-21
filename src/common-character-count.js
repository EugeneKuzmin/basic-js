const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s2_processed = s2.split('')

  return s1.split('').reduce((aggr,s)=>{
    const indx = s2_processed.indexOf(s)
    if(indx >= 0){
      aggr += 1
      s2_processed.splice(indx,1)
    }
    return aggr
  },0);
}

module.exports = {
  getCommonCharacterCount
};
