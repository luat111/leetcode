/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const str = s.trim();
    return str.slice(-(str.length - (str.lastIndexOf(' ') + 1))).length;
};
