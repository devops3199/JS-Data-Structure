const input = '011110'; // 모두 0 혹은 1로 만드는데 걸리는 최고 횟수

let count_zero = 0;
let count_one = 0;

if(input[0] === '0') {
    count_one++;
} else {
    count_zero++;
}

for(let i = 0; i < input.length - 1; i++) {
    if(input[i] != input[i + 1]) {
        if(input[i + 1] === '0') {
            count_one++; // 1로 변경
        } else {
            count_zero++; // 0으로 변경
        }
    }
}

console.log(count_one > count_zero ? count_zero : count_one);