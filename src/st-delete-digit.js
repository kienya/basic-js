import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  const numbers = String(n).split('');
  let num;
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] <= numbers[i + 1]) {
      num = numbers[i];
    }
  }
  numbers.splice(numbers.indexOf(num), 1)
  return +numbers.join('');
}
