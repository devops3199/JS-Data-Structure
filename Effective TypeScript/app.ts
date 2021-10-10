type TMathFunc = (a: number, b: number) => number;

const add: TMathFunc = (a ,b) => a + b; // 표현식
const substract: TMathFunc = (a ,b) => a - b;

// 선언
function multiply(a: number, b: number): number {
  return a * b;
}