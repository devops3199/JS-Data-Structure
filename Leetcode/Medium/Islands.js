let grid = [[1,1,1,0,0], [1,1,0,0,1], [1,1,0,0,1], [1,1,1,0,1], [0,1,1,0,0]];

let count = 0;

function dfs(i, j) {
    grid[i][j] = 2;

    //left j-1
    if(j-1 >= 0 && grid[i][j-1] === 1) {
        dfs(i, j-1);
    }
    //right j+1
    if(j+1 < grid[0].length && grid[i][j+1] === 1) {
        dfs(i, j+1);
    }
    //up i-1
    if(i-1 >= 0 && grid[i-1][j] === 1) {
        dfs(i-1, j);
    }
    //down i+1
    if(i+1 < grid.length && grid[i+1][j] === 1) {
        dfs(i+1, j);
    }
}

for(let i=0; i < grid.length; i++) {
    for(let j=0; j < grid[i].length; j++) {
        if(grid[i][j] !== 1) {
            continue;
        }
        count += 1;
        dfs(i, j);
    }
}
console.log(grid);
console.log(count);