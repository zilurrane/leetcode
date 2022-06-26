/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let presentNumbers = {};
    for(let i = 0; i<nums.length; i++) {
        const num = nums[i];
        if(presentNumbers[num]) {
            return true;
        } else {
            presentNumbers[num] = 1;
        }
    }
    return false;
};
