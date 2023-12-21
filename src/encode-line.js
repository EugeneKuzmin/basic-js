const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const repetition = /([^])\1+/g
  if(str.match(repetition) !== null){
    return str.match(repetition).reduce((aggrStr,r)=>{
      aggrStr = aggrStr.replace(r,`${r.length}${r.charAt(0)}`)
      return aggrStr
    },str)
  }{
    return str
  }
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
