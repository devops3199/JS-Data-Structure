let keys = ['R', 'R', 'R', 'U', 'D', 'D'];
let x = 1;
let y = 1;

let dx = [0,0,-1,1]; // col
let dy = [-1,1,0,0]; // row
let types = ['L', 'R', 'U', 'D'];

let nx = 0;
let ny = 0;

for(let key of keys){
    for(let i=0; i < types.length; i++){
        if(key === types[i]) {
            nx = x + dx[i];
            ny = y + dy[i];
        }
    }
    if(nx < 1 || ny < 1 || nx > 5 || ny > 5 ) {
        continue;
    }
    x = nx;
    y = ny;
}

console.log(x,y);