const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
   arr: [],
   getLength() {
      return this.arr.length;
   },
   addLink(/* value */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
   removeLink(/* position */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
   reverseChain() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
   finishChain() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
   },
};

module.exports = {
   chainMaker,
};
