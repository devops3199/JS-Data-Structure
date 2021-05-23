const game_map_init = [
    ["#", "#", "#", "#", "#"],
    ["#", ".", ".", "B", "#"],
    ["#", ".", "#", ".", "#"],
    ["#", "R", "O", ".", "#"],
    ["#", "#", "#", "#", "#"],
]; // True

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

function move_until_wall_hole(r, c, diff_r, diff_c, map) {
    let move_count = 0;
    
    while(map[r + diff_r][c + diff_c] !== '#' && map[r][c] !== 'O') {
        r += diff_r;
        c += diff_c;
        move_count += 1;
    }

    return { next_red_row : r, next_red_col : c, r_count : move_count, next_blue_row : r, next_blue_col : c, b_count : move_count };
}

function solution(game_map) {
    let answer = false;

    let se = game_map.length;
    let ga = game_map[0].length;

    let red = [];
    let blue = [];

    game_map.forEach((row, i) => {
        row.forEach((val, j) => {
            if(val === 'R') {
                red.push(i);
                red.push(j);
            }

            if(val === 'B') {
                blue.push(i);
                blue.push(j);
            }
        })
    })

    const visited = new Array(ga).fill(new Array(se).fill(new Array(ga).fill(new Array(se).fill(false))));
    const queue = [];
    queue.push({ red_row : red[0], red_col : red[1], blue_row : blue[0], blue_col : blue[1], move_count : 1 });

    while(queue.length > 0) {
        let {red_row, red_col, blue_row, blue_col, move_count} = queue.shift();
        
        if(move_count > 10) {
            break;
        }

        let direction = new Array(4).fill(0);

        direction.forEach((_, i) => {
            let {next_red_row, next_red_col, r_count} = move_until_wall_hole(red_row, red_col, dr[i], dc[i], game_map);
            let {next_blue_row, next_blue_col, b_count} = move_until_wall_hole(blue_row, blue_col, dr[i], dc[i], game_map);

            if(game_map[next_blue_row][next_blue_col] === 'O') {
                return;
            }
            if(game_map[next_red_row][next_red_col] === 'O') {
                answer = true;
                return;
            }
            if(next_red_row === next_blue_row && next_red_col === next_blue_col) {
                if(r_count > b_count) {
                    next_red_row -= dr[i];
                    next_red_col -= dc[i];
                } else {
                    next_blue_row -= dr[i];
                    next_blue_col -= dc[i];
                }
            }

            if(!visited[next_red_row][next_red_col][next_blue_row][next_blue_col]) {
                visited[next_red_row][next_red_col][next_blue_row][next_blue_col] = true;
                queue.push({ red_row : next_red_row, red_col : next_red_col, blue_row : next_blue_row, blue_col : next_blue_col, move_count : move_count + 1 });
            }
        })
    }
    return answer;
}

console.log(solution(game_map_init));