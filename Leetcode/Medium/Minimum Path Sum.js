/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let len = grid.length;
    let dp = new Array(len).fill().map(() => Array(len).fill(0));
    
    dp[0][0] = grid[0][0]; // Starting Point
    
    for(let i in grid) {
        for(let j in grid[0]) {
            let x = parseInt(i);
            let y = parseInt(j);

            if(x === 0 && y === 0) {
                continue;
            }
            
            let up = (x > 0) ? dp[x-1][y] : Infinity;
            let left = (y > 0) ? dp[x][y-1] : Infinity;
            
            dp[x][y] = Math.min(up, left) + grid[x][y];
        }
    }
    return dp[len-1][grid[0].length-1];
};

// Runtime = 140ms = very slow...