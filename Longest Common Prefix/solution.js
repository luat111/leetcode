/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let resStr = '';
    let checkStr = strs[0];
    let resLength = checkStr.length;

    while (resLength !== 0) {
        const subStr = checkStr.slice(0, resLength);
        if (strs.every(e => e.startsWith(subStr)) && subStr.length >= resStr.length) {
            resStr = subStr;
        }

        resLength--;
    }

    return resStr;
};
