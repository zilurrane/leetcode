/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     // let map = new Map;
    for (let i = 0; i < nums.length; i++) {
        const expectedNumber = target - nums[i];
        const indexOfExpectedNumber = nums.indexOf(expectedNumber);
        if(indexOfExpectedNumber !== -1) {
            if(i === indexOfExpectedNumber) continue;
            return [i, indexOfExpectedNumber];
        }
    }
    throw new Error('No two sum solution'); 
};
