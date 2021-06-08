let total_nodes = 7;
let total_pairs = 6;

let pair = [[1,2], [2,3], [1,5], [5,2], [5,6], [4,7]]; // 6 pairs

let queue = [1];
let visited = new Set();
let adjList = {};

for(let i=1; i <= total_nodes; i++) {
    adjList[i] = [];
}

pair.forEach((val) => {
    let [x, y] = val;
    adjList[x].push(y);
    adjList[y].push(x);
})

while(queue.length) {
    let current = queue.shift();
    visited.add(current);
    adjList[current].forEach((val) => {
        if(!visited.has(val)) {
            queue.push(val);
        }
    })
}

console.log(visited.size - 1);