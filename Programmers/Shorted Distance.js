// 게임 맵 최단거리
function solution(maps) {
    let answer = 0;
    const visited = new Array(maps.length).fill(0).map(() => new Array(maps[0].length).fill(0));
    const dir_x = [0, 0, 1, -1];
    const dir_y = [1, -1, 0, 0];
    
    function bfs() {
        let queue = [[0,0]];
        visited[0][0] = 1;
        
        while(queue.length > 0) {
            let current = queue.shift();
            
            for(let d = 0; d < 4; d++) {
                let nx = dir_x[d] + current[1];
                let ny = dir_y[d] + current[0];

                if(0 <= nx && nx < maps[0].length && 0 <= ny && ny < maps.length) {
                    if(visited[ny][nx] === 0 && maps[ny][nx] === 1) {
                        visited[ny][nx] = visited[current[0]][current[1]] + 1;
                        queue.push([ny, nx]);
                    }
                }
            }
            
        }
    }
    
    bfs();
    
    answer = visited[maps.length-1][maps[0].length-1] === 0 ? -1 : visited[maps.length-1][maps[0].length-1];
    
    return answer;
}