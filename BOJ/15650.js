// BOJ 백준 2667번
// Backtracking
const n = [1,2,3,4];
const m = 2; // 2개 조합 = 층 = Root -> 1층 -> 2층

let result = new Array(m).fill(0); // [0,0]
let check = [false, false, false, false];

function dfs(x) {
    if(x === m){
        console.log(result); // 2단계로 내려가는 순간 출력
        return;
    }

    for(let i in n) {
        let index = parseInt(i);
        if(check[index]) {
            continue
        } else {
            check[index] = true;
            result[x] = index + 1;

            dfs(x + 1);

            for(let j = index + 1; j < n.length; j++) {
                check[j] = false;
            }
        }
    }
}

dfs(0);