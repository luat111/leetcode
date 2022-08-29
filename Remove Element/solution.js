/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const filterArr = nums.filter(e => e !== val);
    for (let i = 0; i <= filterArr.length; i++) {
        nums[i] = filterArr[i]
    }    
    return filterArr.length
};
