/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const plus = (i) => {
        if (digits[i] + 1 !== 10) { digits[i] += 1; return; }
        digits[i] = 0;
        if (i === 0) { digits.unshift(1); return; }
        return plus(i - 1)
    }

    plus(digits.length - 1)

    return digits
};
