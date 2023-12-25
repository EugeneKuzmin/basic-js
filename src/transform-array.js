const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr)){
    const arrFilters = ['--discard-prev','--discard-next','--double-next','--double-prev']
    const arrProcessed = arr.filter(x=> arrFilters.includes(x))
    arrProcessed.forEach(l=>{
      if(l === '--discard-prev'){
        let dscrdPrevPosition = arr.indexOf('--discard-prev')
        if(dscrdPrevPosition !== 0){
          arr.splice(dscrdPrevPosition - 1,1)
        }
      }
      if(l === '--discard-next'){
        let dscrdNextPosition = arr.indexOf('--discard-next')
        if(dscrdNextPosition !== (arr.length - 1)){
          arr.splice(dscrdNextPosition+1,1)
        }
      }
      if(l === '--double-next'){
        let dblNextPosition = arr.indexOf('--double-next')
        if(dblNextPosition !== (arr.length - 1)){
          const l = arr[dblNextPosition]
          arr.splice(dblNextPosition+1,0,l)
        }
      }
      if(l === '--double-prev'){
        let dblPrevPosition = arr.indexOf('--double-prev')
        if(dblPrevPosition !== 0){
          const l = arr[dblPrevPosition]
          arr.splice(dblPrevPosition - 1,0,l)
        }
      }
    })
    arr = arr.filter(x=>x !=='--discard-prev').filter(x=>(x !=='--discard-next')).filter(x=>(x !=='--double-next')).filter(x=>(x !=='--double-prev'))
    return arr;
  }else{
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
