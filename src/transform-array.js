import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArray = arr.reduce((array, item, i) => {
    if (item === '--double-next' && item != arr[arr.length - 1]) {
      array.push(arr[i + 1]);
    } else if (item === '--double-prev' && item != arr[0]) {
      array.push(arr[i - 1]);
    } else if (item === '--discard-next' && item != arr[arr.length - 1]) {
      arr[i + 1] = ''
    } else if (item === '--discard-prev' && item != arr[0]) {
      array.pop();
    } else {
      if (item != '--double-next' && item != '--double-prev' && item != '--discard-next' && item != '--discard-prev') {
        array.push(item);
      }
    }
    return array;
  }, []).filter(item => item != '');
  return newArray;
}
