// 입력 = 999 123
// 결과 = 1122

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(input) {
  const nums = input.split(' ');
  const answer = [];

  // Integer Overflow 경우 어떻게 대처할지 물어보는 문제 같습니다.
  // 해결 방법 = 각 숫자를 배열로 변경하여 덧샘을 진행합니다.
  // 배열의 크기는 메모리가 허용하는 크기만큼 커집니다.

  const num1 = nums[0].split('').map((el) => parseInt(el));
  const num2 = nums[1].split('').map((el) => parseInt(el));

  const more = num1.length > num2.length ? num1 : num2; // 더 큰 자리수
  const less = num1.length <= num2.length ? num1 : num2; // 더 작은 자리수
  const loop = more.length - less.length;
  
  let carry = 0;

  for(let i = 0; i < loop; i++) {
    less.unshift(0); // 더 작은 자리수는 앞에 0으로 채워넣기
  }
  // 배열 뒤에서부터 시작
  for(let i = more.length - 1; 0 <= i; i--) {
    let sum = more[i] + less[i] + carry;
    
    // 2자리 넘어가면
    if(sum > 9) {
        carry = 1;
        answer.unshift(sum % 10);
    } else {
        carry = 0;
        answer.unshift(sum);
    }
  }

  if(carry === 1) {
    answer.unshift(carry); // 예) 99 + 2 = 101, 앞자리 1을 채워넣기
  }

  console.log(answer.join('')); // Integer overflow로 인해 문자열로 출력

  rl.close();
}).on("close", function() {
  process.exit();
});
