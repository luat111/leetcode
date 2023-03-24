/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      count++;
      continue;
    }

    [max, count] = [count > max ? count : max, 0];
  }

  return Math.max(max,count);
};
