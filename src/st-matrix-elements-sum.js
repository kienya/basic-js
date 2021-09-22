import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let counter = 0
  matrix.reverse().forEach((arr, i) => {
    arr.forEach((elem, idx) => {
      if (i === matrix.length - 1) {
        counter += elem;
      } else {
        if (matrix[i + 1][idx] != 0) {
          counter += elem
        }
      }
    })
  })
  return counter;
}
