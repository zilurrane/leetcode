/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];
    for(let i=1; i< nums.length; i++) {
        let tempSum = sum + nums[i];
        sum = tempSum > nums[i] ? tempSum : nums[i];
        max = sum > max ? sum : max;
    }
    return max;
};
