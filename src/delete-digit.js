const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   let max = 0;
   const arrNumb = n
      .toString()
      .split('')
      .map((elem) => +elem);
   console.log(arrNumb);
   for (let i = 0; i < arrNumb.length; i++) {
      const arrWithout = [...arrNumb];
      arrWithout.splice(i, 1);
      const newNumb = +arrWithout.join('');
      if (newNumb > max) {
         max = newNumb;
      }
   }
   return max;
}

module.exports = {
   deleteDigit,
};
