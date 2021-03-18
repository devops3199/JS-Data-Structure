// BOJ 백준 1992번
// Recursion, Divide and Conquer
const matrix = [[1,1,1,1,0,0,0,0], [1,1,1,1,0,0,0,0], [0,0,0,1,1,1,0,0], [0,0,0,1,1,1,0,0], [1,1,1,1,0,0,0,0], [1,1,1,1,0,0,0,0],[1,1,1,1,0,0,1,1],[1,1,1,1,0,0,1,1]];
const n = 8;
let result = [];

function divide(x,y,n) {
    let start = matrix[x][y];
    for(let i = x; i < x+n; i++) {
        for(let j = y; j < y+n; j++) {
            if(start != matrix[i][j]) {
                result.push('(');
                divide(x, y, Math.trunc(n/2));
                divide(x, y + Math.trunc(n/2), Math.trunc(n/2));
                divide(x + Math.trunc(n/2), y, Math.trunc(n/2));
                divide(x + Math.trunc(n/2), y + Math.trunc(n/2), Math.trunc(n/2));
                result.push(')');
                return;
            }
        }
    }

    if(start === 0) {
        result.push(0)
    } else {
        result.push(1)
    }
}

divide(0,0,n);
console.log(result.join(''));