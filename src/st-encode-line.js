import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  const items = str.split(''),
    result = [];
  let count = 1;
  items.forEach((item, i) => {
    if (item === items[i - 1]) {
      count++;
      result[result.length - 1] = count + item;
    } else {
      count = 1;
      result.push(item);
    }
  })
  return result.join('');
}
