/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length <= 1) return nums.map(e => e.toString());

    const set = [...new Set(nums)];
    let res = new Set();
    let start = set[0];

    for (let i = 1; i < set.length; i++) {
        if (set[i] - set[i - 1] > 1) {
            const range = start !== set[i - 1] ? `${start}->${set[i - 1]}` : `${start}`;
            res.add(range);
            start = set[i]
        }

        if (!set[i + 1]) {
            const range = start !== set[i] ? `${start}->${set[i]}` : `${start}`;
            res.add(range);
        }
    }


    return [...res];
};
