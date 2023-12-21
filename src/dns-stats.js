const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domainsPrcsd = domains.map(x=>`${x.split('.').reverse().join('.')}`)
  const res = domainsPrcsd.reduce((aggr,l)=>{
    const domains = l.split('.').reduce((fStr,dt,i)=>{
      if(i === 0){
          fStr.push('.' + dt)
      }else{
          fStr.push(fStr[i-1] + '.' + dt)
      }
      return fStr
    },[])

    domains.forEach(element => {
      if(aggr[element]){
        aggr[element] += 1
      }else{
        aggr[element] = 1
      }
    });
    return aggr

  },{})
 return res
  
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
