let arr = [2,3,-2,4];
let dp = new Array(arr.length).fill().map(() => new Array(2).fill(0));

dp[0][0] = arr[0]; // 2
dp[0][1] = arr[0]; // 2

for(let i=1; i < arr.length; i++) {
    let current = arr[i];
    dp[i][0] = Math.max(current, Math.max(dp[i-1][0] * current, dp[i-1][1] * current));
    dp[i][1] = Math.min(current, Math.min(dp[i-1][0] * current, dp[i-1][1] * current));
}

let max = dp[0][0];

for(let i=0; i < arr.length; i++) {
    if(dp[i][0] > max) max = dp[i][0];
}

console.log(max);