/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    const recur = (n) => {
        const nStr = n.toString();
        if (nStr === '1') return true;
        if (set.has(n)) return false;

        const newValue = [...nStr].reduce((value, e) => value += Math.pow(e, 2), 0)
        set.add(n)

        return recur(newValue)
    }


    return recur(n);
};
