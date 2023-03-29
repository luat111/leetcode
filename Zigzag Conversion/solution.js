/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) return s;
  const arr = []
  let temp = []
  let flag = true
  let i = 0

  while (s[i]) {
    if (flag) {
      temp.push(s[i])
    } else {
      temp.unshift(s[i])
    }

    if (temp.length >= numRows) {
      flag = !flag
      arr.push(temp)
      temp = ['']
    }

    i++;
  }

  if (temp.length < numRows) {
    const empty = new Array(numRows - temp.length).fill('')
    temp = flag ? temp.concat(empty) : empty.concat(temp)
  }

  arr.push(temp);

  let str = ''
  i = 0;
  for (let j = 0; j < numRows; j++) {
    while (i < arr.length) {
      str += arr[i][j] || ''
      i++;
    }
    i = 0;
  }

  return str;
};
