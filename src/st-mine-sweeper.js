import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const result = [];
  matrix.forEach((array, i) => {
    array.reduce((total, item, idx) => {
      if (i === 0) {
        if (idx === 0) {
          total.push(array[idx + 1] + matrix[i + 1][idx] + matrix[i + 1][idx + 1])
        }
        else if (idx === array.length - 1) {
          total.push(array[idx - 1] + matrix[i + 1][idx] + matrix[i + 1][idx - 1]);
          result.push(total);
          total = [];
        }
        else {
          total.push(array[idx - 1] + array[idx + 1] + matrix[i + 1][idx] + matrix[i + 1][idx - 1] + matrix[i + 1][idx + 1]);
        }
      } else if (i === matrix.length - 1) {
        if (idx === 0) {
          total.push(array[idx + 1] + matrix[i - 1][idx] + matrix[i - 1][idx + 1])
        }
        else if (idx === array.length - 1) {
          total.push(array[idx - 1] + matrix[i - 1][idx] + matrix[i - 1][idx - 1]);
          result.push(total);
          total = [];
        }
        else {
          total.push(array[idx - 1] + array[idx + 1] + matrix[i - 1][idx] + matrix[i - 1][idx - 1] + matrix[i - 1][idx + 1]);
        }
      } else {
        if (idx === 0) {
          total.push(array[idx + 1] + matrix[i + 1][idx] + matrix[i - 1][idx] + matrix[i - 1][idx + 1] + matrix[i + 1][idx + 1])
        }
        else if (idx === array.length - 1) {
          total.push(array[idx - 1] + matrix[i - 1][idx] + matrix[i + 1][idx] + matrix[i - 1][idx - 1] + matrix[i + 1][idx - 1]);
          result.push(total);
          total = [];
        }
        else {
          total.push(array[idx - 1] + array[idx + 1] + matrix[i - 1][idx] + matrix[i - 1][idx - 1] + matrix[i - 1][idx + 1] + matrix[i + 1][idx - 1] + matrix[i + 1][idx + 1]);
        }
      }
      return total;
    }, []);
  });
  return result;
}
