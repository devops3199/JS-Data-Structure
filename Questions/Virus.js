// 백준 2606번 바이러스 문제

let total_nodes = 7; // 7개 노드
let total_pairs = 6; // 6쌍 노드

let pair = [[1,2], [2,3], [1,5], [5,2], [5,6], [4,7]];

let computer_dictionary = {};

let queue = [1];

let visited = new Set();

for(let i = 0; i < total_nodes; i++) {
    computer_dictionary[i+1] = new Set();
}

for(let i = 0; i < total_pairs; i++) {
    let a = pair[i][0];
    let b = pair[i][1];

    computer_dictionary[a].add(b);
    computer_dictionary[b].add(a);
}

// BFS
while (queue.length) {
    current = queue.pop(0);
    visited.add(current);
    computer_dictionary[current].forEach(item => {
        if(!(visited.has(item))) {
            queue.push(item);
        }
    });
}

console.log(visited.size - 1);