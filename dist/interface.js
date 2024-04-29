"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'kenken',
    nickName: 'kenchan'
};
class Developer {
    constructor(age, experience, name) {
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: age
        });
        Object.defineProperty(this, "experience", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: experience
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
    }
    greeting(message = 'Hello') {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'natanuki',
    age: 30,
    experience: 5,
    greeting(message) {
        console.log(message);
    }
};
const user = new Developer(21, 3, 'ken');
if (user.name) {
    user.name.toUpperCase();
}
console.log(user.name);
