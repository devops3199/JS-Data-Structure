/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let tmp = -Infinity;
    let ans = -Infinity;
    
    for(let i=0; i < nums.length; i++) {
        tmp = Math.max(0, tmp);
        tmp += nums[i];
        ans = Math.max(ans, tmp);
    }
    return ans;
};