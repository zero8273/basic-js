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
   let resStr = '';
   let strCount = 1;
   for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
         strCount++;
      } else {
         if (strCount > 1) {
            resStr += strCount + str[i];
         } else {
            resStr += str[i];
         }
         strCount = 1;
      }
   }
   return resStr;
}

module.exports = {
   encodeLine,
};
