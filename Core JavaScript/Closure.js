/*
    자바스크립트 어휘적 환경(Lexical Environment)을 가진다.

    1. 코드가 실행되면 선언한 변수(one) 및 함수(addOne)들은 Lexical 환경(전역)에 올라간다.

    let 변수는 최상단으로 호이스팅되고 선언만 된 상태 (초기화 X = 할당받은 메모리 공간이 없으니, 사용불가)
    반면, 함수는 사용가능
*/

let one; // 2. 코드가 let one;에 오면 undefined = 초기화(메모리 공간만 할당) 된다.
one = 1; // 3. 이제 one에 1이라는 값이 할당된다.

function addOne(num) {
    console.log(one + num);
}

addOne(5); // 4. 함수 살행 후 새로운 Lexical 환경이 만들어짐. (addOne의 어휘적 환경, 전역 X)

// 여기서 포인트는 addOne의 어휘적 환경은 전역 어휘적 환경을 참조한다. 즉, 전역 Lexical 환경에 있는 변수, 함수들의 값을 가져 올 수 있다.

// 클로저는 어휘적 환경을 구분해주는 개념이다.