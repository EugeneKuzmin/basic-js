const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let nArr = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  nArr = nArr.map(x=>{
    let s = 0
    let i = 0
    while(i<x.length&&x[i]!==0){
      s += x[i]
      i++
    }
    return s
  })
  return nArr.reduce((s,l)=>s += l,0)

  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
