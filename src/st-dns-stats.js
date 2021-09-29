import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {}
  domains.forEach(domain => {
    domain.split('.').reverse().reduce((total, item) => {
      total += `.${item}`;
      obj[total] ? obj[total] = obj[total] + 1 : obj[total] = +!!obj[total] + 1;
      return total;
    }, '')
  })
  return obj;
}
