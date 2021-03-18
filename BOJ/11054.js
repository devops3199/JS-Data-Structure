// BOJ 백준 11054번
// Dynamic Programming, 바이토닉 부분 수열
const arr = [1,5,2,1,4,3,4,5,2,1];
let dp_left = new Array(10).fill(0);
let dp_right = new Array(10).fill(0);

let ans = 0;

function sequence(arr, dp) {
    let max = 0;

    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[j] < arr[i]) {
                dp[i] = (dp[j] + 1 > dp[i]) ? dp[j] + 1 : dp[i];
                if (max < dp[i]) {
                    max = dp[i];
                }
            }
        }
    }
}

sequence(arr, dp_left);
arr.reverse();
sequence(arr, dp_right);
dp_right.reverse();

for(let i = 0; i < arr.length; i++) {
    if(ans < dp_left[i] + dp_right[i]) {
        ans = dp_left[i] + dp_right[i];
    }
}

console.log(ans + 1);
