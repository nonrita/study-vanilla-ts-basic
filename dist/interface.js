"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
class Developer {
    constructor(name, age, experience) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
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
    }
    greeting(message) {
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
const user = tmpDeveloper;
