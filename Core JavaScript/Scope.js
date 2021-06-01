var a = 1;
var outer = function() {
    var inner = function() {
        // inner 실행 컨텍스트안에 var a가 먼전 선언 및 초기화까지 완료 - 호이스팅
        console.log(a); // undefined
        var a = 3;
        console.log(inner);
    };
    inner();
    console.log(a); // 1
};
outer();
console.log(a); // 1