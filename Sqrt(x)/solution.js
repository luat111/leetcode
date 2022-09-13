/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (let i = 0; i <= x; i++) {
        let check = i - 1;
               
        if (i * i > x && check * check <= x) return check;
        if (i * i >= x) return i;

    }
    return 0;
};
