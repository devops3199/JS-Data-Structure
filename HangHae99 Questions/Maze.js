let maze = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
let nx = 0;
let ny = 0;

function bfs(x, y) {
  let queue = [[x, y]];
  while (queue.length > 0) {
    let temp = queue.pop(0);
    x = temp[0];
    y = temp[1];

    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= maze.length || ny >= maze[0].length) {
        continue;
      }

      if (maze[nx][ny] === 0) {
        continue;
      }

      if (maze[nx][ny] === 1) {
        maze[nx][ny] = maze[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return maze[maze.length - 1][maze[0].length - 1];
}

console.log(bfs(0, 0));
console.log(maze);
