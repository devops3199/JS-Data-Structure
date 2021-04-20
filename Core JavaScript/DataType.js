/*
Data Type = 기본형, 참조형
기본형 = Number, String, Boolean, null, undefined, Symbol(ES6)
참조형 = Array, Function, Date, RegExp, Map, WeakMap, Set, WeakSet
*/

/* 불변 객체 예제 */
let user1 = {
    name : 'Sam',
    gender : 'Male',
};

// 가변성의 문제, 기존 user1 객체의 값도 바뀜. 불변 X
let changeName = (user, name) => {
    let newUser = user; 
    newUser.name = name; 
    return newUser;
};

let user2 = changeName(user1, 'Jack');

console.log(user1 === user2); // true

// 이렇게 수정하면 user1의 데이터는 안변함. 즉, 불변!
changeName = (user, name) => {
    return {
        name : name,
        gender : user.gender, 
    };
};

let user3 = changeName(user1, 'Sam');

console.log(user3 === user2); // false

// 객체의 property 개수에 상관없이 불변성을 지키면서 복사하는법, 얕은 복사(바로 아래 단계의 값만 복사)
let copy = (input) => {
    let result = {};
    for(let prop in input) {
        console.log(prop);
        result[prop] = input[prop];
    }
    return result;
};

let user4 = copy(user3);
user4.name = 'Peter';
console.log(user4 === user3); // false

// 깊은 복사(내부의 모든 값들을 하나하나 찾아서 전부 복사)
let deepCopy = (input) => {
    let result = {};

    if(typeof input === 'object' && input !== null){
        for(let prop in input) {
            result[prop] = deepCopy(input[prop]); // 재귀 사용
        }
    } else {
        result = input;
    }

    return result;
};

let deepObj1 = {
    name : 'Jack',
    url : {
        website : 'none',
        tools : {
            service : 'api',
        }
    }
};

let deepObj2 = deepCopy(deepObj1);
deepObj2.name = 'Alex';
deepObj2.url.website = 'google.com';
deepObj2.url.tools.service = 'rest';

console.log(deepObj1); // { name: 'Jack', url: { website: 'none', tools: { service: 'api' } } }
console.log(deepObj2); // { name: 'Alex', url: { website: 'google.com', tools: { service: 'rest' } } }