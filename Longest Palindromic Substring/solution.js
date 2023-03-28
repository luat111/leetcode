/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;

  const checkPalindromic = (s) => {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
      if (s[i] !== s[j]) {
        return 0;
      }
      i++;
      j--;
    }
    return s.length;
  };

  let res = '';
  for (let i = 0; i < s.length; i++) {
    let currentIdx = i + 1;
    let nextIdx = s.indexOf(s[i], currentIdx);
    while (nextIdx !== -1) {
      const subStr = s.substring(i, nextIdx + 1);
      res = checkPalindromic(subStr) > res.length ? subStr : res;

      currentIdx = nextIdx + 1;
      nextIdx = s.indexOf(s[i], currentIdx);
    }
  }

  return res || s[0];
};
