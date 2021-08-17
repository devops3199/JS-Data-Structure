/** 낙서장  **/

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getThis = function() {
    console.log(this, 'getThis');
}

let person1 = new Person('John', 40);

// console.log(person1.getName());
// console.log(person1.__proto__);

function testThis() {
    console.log(this, 'testThis');
}

testThis(); // this === global

const obj = {
    fetchObj: function() {
        console.log(this, 'fetchObj');
    }
}

obj.fetchObj(); // Explicit binding -> this === obj

// testThis.call(obj); // Explicit binding -> this === obj

const newTestThis = testThis.bind(obj);
newTestThis(); // hard binding -> this === obj

// new binding
let person2 = new Person('Jack', 30);
person2.getThis();

