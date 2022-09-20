/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    let i = 0;
    let check = false;
    while (Math.pow(2, i) <= n) {
        if (Math.pow(2, i) === n) check = true;
        i++;
    }

    return check
};
