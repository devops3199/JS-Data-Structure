/*
실행 컨텍스트와 콜 스택(실행할 함수를 계속 스택으로 쌓고 위에서부터 호출)

실행 컨텍스트 (EC)

실행할 코드에 제공할 환경 정보들을 모아놓은 객체

*/

console.log(sum(3,4));

// 함수 선언식 (호이스팅 시 function sum(x, y) { return x + y; };)
function sum (x, y) {
    return x + y;
};

// 함수 표현식 (호이스팅 시 var sum;)
var sum = function (x, y) {

};