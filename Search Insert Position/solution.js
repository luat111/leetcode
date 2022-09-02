/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for(let i = 0; i <= nums.length -1; i++){
        if(nums[i] === target){
            return i;
        }
        
        if((target > nums[i] && target < nums[i+1])){
            return i + 1;
        }            
    }
    
    return nums[0] > target ? 0 : nums.length
};