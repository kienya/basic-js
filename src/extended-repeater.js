import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  const { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;
  let additionSting = addition
  let newString = '';
  if (Number.isInteger(repeatTimes) || Number.isInteger(additionRepeatTimes)) {
    for (let i = 0; i < repeatTimes; i++) {
      newString += str;
      if (additionRepeatTimes) {
        for (let i = 0; i < additionRepeatTimes; i++) {
          i < additionRepeatTimes - 1 ? newString += additionSting + additionSeparator : newString += additionSting;
        }
      } else {
        if (additionSting) {
          newString += additionSting;
        }
      }
      if (i < repeatTimes - 1) {
        newString += separator;
      }
    }
    return newString;
  } else {
    return str + addition;
  }
}
