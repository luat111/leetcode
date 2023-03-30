/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let countA = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') countA++;
    if (countA >= 2) return false;
    if (s[i] === 'L' && s.substring(i, i + 3) === 'LLL') return false;
  }

  return true
};
