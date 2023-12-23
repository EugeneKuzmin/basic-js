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
  const separator = options.separator?options.separator:'+'
  
  var strres = ''
  
  if(options.hasOwnProperty('addition')){
    const additionSeparator = options.additionSeparator?options.additionSeparator:
    options.additionRepeatTimes?'|':''
    if(options.additionRepeatTimes){
      strres = (String(options.addition)+additionSeparator).repeat(options.additionRepeatTimes)
      strres = strres.slice(0,strres.length - additionSeparator.length)
    }else{
      strres = String(options.addition)
    }
  }

  if(options.repeatTimes){
    strres = (str+ strres + separator).repeat(options.repeatTimes)
    strres = strres.slice(0,strres.length - separator.length)
  }else{
    strres = str+ strres
  }
   return strres
}

module.exports = {
  repeater
};
