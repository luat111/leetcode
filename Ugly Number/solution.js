/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    let res = false;
    if (n === 1) return true;
    if(n === 0) return false;
    const recur = (num) => {
        if ([2, 3, 5].includes(num)) { res = true; return; }
        [2, 3, 5].map(e => {
            if (num % e === 0) recur(num / e)
            return e;
        })
        return;
    }
    
    recur(n);

    return res
};
