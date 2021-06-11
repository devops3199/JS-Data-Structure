// 입력 = 오백삼십조칠천팔백구십만천오백삼십구 삼조사천이만삼천구
// 결과 = 오백삼십삼조일억천팔백구십이만사천오백사십팔

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(input) {
    const kNums = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
    const kDigits = ['십', '백', '천'];
    const kBigDigits = ['만', '억', '조', '경'];

    const nums = input.split(' ');
    const num1 = nums[0].split('');
    const num2 = nums[1].split('');

    const num1_arr = [0, 0, 0, 0]; // 조 억 만 천 - [ 530조, 0억, 7890만, 1539 ] 
    const num2_arr = [0, 0, 0, 0]; // 조 억 만 천 - [ 3조, 0억, 4002만, 3009 ]
    let answer = [0, 0, 0, 0]; // 조 억 만 천 - 계산이 완료된 값

    let temp = []; // 숫자를 배열로 변환 과정에 사용되는 이미 배열

    // 첫번째 숫자 변환 과정 - 예) [ 530조, 0억, 7890만, 1539 ] 
    num1.forEach((val, index) => {
        if(kBigDigits.includes(val)) {
            const result = eval(temp.join(''));
            if(val === '조') {
                num1_arr[0] = result;
            } else if(val === '억') {
                num1_arr[1] = result;
            } else if(val === '만') {
                num1_arr[2] = result;
            } else {
                num1_arr[3] = result;
            }
            temp = [];
        } else {
            if(kNums.includes(val)) {
                const idx = kNums.indexOf(val);
                temp.push(`+${idx}`);
            } else if(kDigits.includes(val)){
                const idx = kDigits.indexOf(val);
                const final = 10**(idx+1);
                if(temp.length === 0) {
                    temp.push(`1*${final}`); // 천구백사십 이런식으로 시작할때
                } else {
                    temp.push(`*${final}`);
                }
            }

            // 마지막 요소
            if(index === num1.length-1) {
                const result = eval(temp.join(''));
                num1_arr[3] = result;
                temp = [];
            }
        }
    })

    // 두번째 숫자 변환 과정 - 예) [ 3조, 0억, 4002만, 3009 ]
    num2.forEach((val, index) => {
        if(kBigDigits.includes(val)) {
            // 예) 만, 천, 십 - 앞에 숫자가 없을때
            if(temp.length === 0) {
                temp.push(1);
            }

            const result = eval(temp.join(''));
            if(val === '조') {
                num2_arr[0] = result;
            } else if(val === '억') {
                num2_arr[1] = result;
            } else if(val === '만') {
                num2_arr[2] = result;
            } else {
                num2_arr[3] = result;
            }
            temp = [];
        } else {
            if(kNums.includes(val)) {
                const idx = kNums.indexOf(val);
                temp.push(`+${idx}`);
            } else if(kDigits.includes(val)){
                const idx = kDigits.indexOf(val);
                const final = 10**(idx+1);
                if(temp.length === 0) {
                    temp.push(`1*${final}`); // 천구백사십 이런식으로 시작할때
                } else {
                    temp.push(`*${final}`);
                }
            }

            // 마지막 요소
            if(index === num2.length-1) {
                const result = eval(temp.join(''));
                num2_arr[3] = result;
                temp = [];
            }
        }
    })

    let carry = 0; // 올림
    for(let i = 3; i >= 0; i--) {
        const sum = num1_arr[i] + num2_arr[i] + carry;
        if(sum > 9999) {
            carry = 1;
            answer[i] = sum % 10000;
        } else {
            carry = 0;
            answer[i] = sum;
        }
    }

    // 혹시 몰라 경 단위도 추가 해봤습니다.
    if(carry === 1) {
        answer.unshift(carry); // 10000조 === 1경
    }

    let ret = [];
    answer.forEach((val, index) => {
        // 1000, 100, 10, 1
        let temp = val;
        for(let i=3; i >= 0; i--) {
            let ten = 10**i;

            // 예) 533 / 1000 = 0.533, 1보다 커야한다
            if(temp < ten) {
                continue;
            }

            idx = Math.floor(temp / ten);
            temp = temp % ten;

            // 1은 마지막 자리수에서만 "일"이라고 읽고 다른 자리수에서는 단위로만 읽는다.
            if(idx === 1) {
                if(i === 0) {
                    ret.push(kNums[idx]);
                }
            } else {
                ret.push(kNums[idx]);
            }

            if(kDigits[i-1] !== undefined) {
                ret.push(kDigits[i-1]);
            }
        }
        // 값이 있는 경우에만
        if(answer[index] > 0) {
            // 경 단위가 생기면 -1, 아니면 -2
            let temp_idx = answer.length === 4 ? (answer.length-2) - index : (answer.length-1) - index;
            ret.push(kBigDigits[temp_idx]);
        }
    })

    console.log(ret.join('')); // 결과값

    rl.close();
}).on("close", function() {
  process.exit();
});
