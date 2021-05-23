/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    return permutation(nums, nums.length);
    
    function permutation(arr, num) {
        let result = [];
        
        // 재귀 멈춤
        if(num === 1) {
            return arr.map(v => [v]);
        }
        
        arr.forEach((val, index, arr) => {
            const fixed = val;
            const rest = arr.filter((_, idx) => index !== idx);
            const permuArr = permutation(rest, num-1);
            const combine = permuArr.map(v => [fixed, ...v]);
            result.push(...combine);
        })
        
        return result;
    }
};