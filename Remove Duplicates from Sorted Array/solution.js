/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const newSet = [...new Set(nums)];
    for(let i = 0; i<=newSet.length; i++){
        nums[i] = newSet[i]
    }
    return newSet.length
};
