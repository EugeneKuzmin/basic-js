const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date instanceof Date){
  try {
    date.getTime() 
    const month = date.getMonth()

      console.debug('instance od date',date)
  
      if(month < 2){
        console.debug('winter')
        return 'winter'
      }
      if(month < 5){
        console.debug('spring')
        return 'spring'
      }
      if(month < 8){
        console.debug('summer')
        return 'summer'
      }
      if(month < 11){
        console.debug('autumn')
        return 'autumn'
      }
      if(month === 11){
        console.debug('winter')
        return 'winter'
      }
      
    } catch (error) {
      console.debug('throw error 2',date)
      throw new Error('Invalid date!');
      
    }
  }else{
    console.debug('throw error',date)
    return 'Unable to determine the time of year!'
  }


}

module.exports = {
  getSeason
};
