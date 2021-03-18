// BOJ 백준 2667번
// BFS, DFS, Graph Search
const map = 7;
const matrix = [[0,1,1,0,1,0,0], [0,1,1,0,1,0,1], [1,1,1,0,1,0,1], [0,0,0,0,1,1,1], [0,1,0,0,0,0,0], [0,1,1,1,1,1,0], [0,1,1,1,0,0,0]];
let visited = new Array(7).fill().map(() => Array(7).fill(0));

const dir_x = [0, 1, 0, -1]; // 상,우,하,좌 = 시계방향
const dir_y = [1, 0, -1, 0]; // 상,우,하,좌 = 시계방향

let count = 0;
let result = [];

function dfs(x,y) {
    visited[x][y] = 1;

    if(matrix[x][y] === 1) {
        count += 1;
    }
    
    for(let i = 0; i < 4; i++) {
        let nx = dir_x[i] + x;
        let ny = dir_y[i] + y;

        if(0 <= nx && nx < map && 0 <= ny && ny < map) {
            if(visited[nx][ny] === 0 && matrix[nx][ny] === 1) {
                dfs(nx, ny);
            }
        }
    }
}

for(let i in matrix){
    for(let j in matrix[i]){
        if(matrix[i][j] === 1 && visited[i][j] === 0) {
            dfs(parseInt(i),parseInt(j)); // for in 으로 돌리면 문자열 인덱스가 나옴
            result.push(count);
            count = 0;
        }
    }
}

console.log(result); // [7,8,9]