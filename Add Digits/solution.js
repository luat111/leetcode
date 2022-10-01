/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num;
    return addDigits(eval([...num.toString()].join('+')));
};
