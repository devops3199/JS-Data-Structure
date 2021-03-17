// BOJ 백준 2579번
// Dynamic Programming
const stairs = 6;
const point = [10,20,15,25,10,20];
let dp = [];

dp.push(point[0]);
dp.push(point[0] + point[1]);
dp.push(Math.max(point[0] + point[2], point[1] + point[2]));

for(let i = 3; i < stairs; i++) {
    dp.push(Math.max(dp[i-3] + point[i-1] + point[i], dp[i-2] + point[i]))
}

console.log(dp[stairs-1])