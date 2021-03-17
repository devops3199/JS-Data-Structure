/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let ans = 0;
    
    let bit = n.toString(2).split('');
    
    while(bit.length < 32) {
        bit.unshift(0);
    }

    ans = parseInt(bit.reverse().join(''), 2);
    
    return ans;
};