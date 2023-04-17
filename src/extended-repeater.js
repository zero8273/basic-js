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
function repeater(
   str,
   {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|',
   }
) {
   let resStr = '';

   for (let i = 0; i < repeatTimes; i++) {
      resStr = resStr + str;

      for (let l = 0; l < additionRepeatTimes; l++) {
         resStr = resStr + addition;
         if (l !== additionRepeatTimes - 1) {
            resStr = resStr + additionSeparator;
         }
      }

      if (i !== repeatTimes - 1) {
         resStr = resStr + separator;
      }
   }

   return resStr;
}

module.exports = {
   repeater,
};
