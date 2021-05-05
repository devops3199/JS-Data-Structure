/* 프로그래머스 - 스택/큐 - 기능개발 */

/*
    Test Case 1 = progresses -> [93, 30, 55], speeds -> [1, 30, 5], return -> [2, 1]
    Test Case 2 = progresses -> [95, 90, 99, 99, 80, 99], speeds -> [1, 1, 1, 1, 1, 1], return -> [1, 3, 2]
*/

function solution(progresses, speeds) {
    let answer = [];
    let max = 0;
    let stack = [];
    
    let development_days = progresses.map((val, index) => {
        return Math.ceil((100-val) / speeds[index]);
    });
    
    development_days.forEach(val => {
        if(stack.length === 0) {
            stack.push(val);
            max = val;
        } else {
            if(max >= val) {
                stack.push(val);
            } else {
                let count = 0;
                while(stack.length > 0) {
                    count++;
                    stack.pop();
                }
                answer.push(count);
                stack.push(val);
                max = val;
            }   
        }
    });
    
    // stack의 남은 원소 처리
    
    let count = 0;
    
    while(stack.length > 0) {
        count++;
        stack.pop();
    };
    
    answer.push(count);
    
    return answer;
}