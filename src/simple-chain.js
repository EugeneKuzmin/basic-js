const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return `( ${this.chain.join(' )~~( ')} )`.length
  },
  addLink(value) {
    // if(this.chain){
    //   this.chain = `${this.chain} ~~ ( ${value} )`
    // }else{
    //   this.chain = `( ${value} )`
    // }
    console.log('add link+++',String(value));
    
    this.chain.push(String(value))
    
  },
  removeLink(position) {
    console.log('position---',position);
    if(!Number.isNaN(position)&&Number.isInteger(position)&&position>0&&this.chain.length>position){
      this.chain.splice(position-1,1)
    }else{
      console.log('throw an error');
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chain.reverse()
  },
  finishChain() {
    console.log(`( ${this.chain.join(' )~~( ')} )`)
    
    return `( ${this.chain.join(' )~~( ')} )`
  },
  chain:[],
};

module.exports = {
  chainMaker
};
