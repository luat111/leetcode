/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.reduce((newSet, current) => {
        if (!newSet.has(current)) newSet.add(current);
        else newSet.delete(current);
        return newSet;
    }, new Set());


    return [...nums][0]
};
