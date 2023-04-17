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
   const toString = Object.prototype.toString;
   if (date === undefined) {
      return 'Unable to determine the time of year!';
   } else if (
      toString.call(date) !== '[object Date]' ||
      (date instanceof Date && date[Symbol.toStringTag] === 'Date')
   ) {
      throw new Error('Invalid date!');
   }
   //  || !date instanceof Date) {
   //     throw new Error('Unable to determine the time of year!');
   //  }
   else {
      const dateMount = date.getMonth();
      const spring = [2, 3, 4];
      const summer = [5, 6, 7];
      const autumn = [8, 9, 10];
      const winter = [11, 0, 1];

      if (spring.includes(dateMount)) {
         return 'spring';
      } else if (summer.includes(dateMount)) {
         return 'summer';
      } else if (autumn.includes(dateMount)) {
         return 'autumn';
      } else if (winter.includes(dateMount)) {
         return 'winter';
      }
   }
}

module.exports = {
   getSeason,
};
