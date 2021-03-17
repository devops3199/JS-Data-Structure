/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let re = /[\W_]/g;
    let lowRegStr = s.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
};