const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log('str',str)
  console.log('options',options)
  let str1 = ''
  let separator = options.separator?options.separator:'+'
  
  if(options.addition){
    str = (String(options.addition)+String(options.additionSeparator)).repeat(options.additionRepeatTimes)
    return (str+separator).repeat(options.repeatTimes)
  }else{
    str1 = '+'
    let strres = (str+separator).repeat(options.repeatTimes)
    return strres.slice(0,strres.length - 1)
  }
  
  
}

module.exports = {
  repeater
};
