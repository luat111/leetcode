/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const splitArr = s.split(' ');

  const reverseStr = (str) => str.split('').reverse().join('');
  return splitArr.map(e => reverseStr(e)).join(' ')
};
