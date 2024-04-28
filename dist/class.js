"use strict";
class Person {
    constructor(initName, initAge) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
    }
}
;
const quill = new Person('Quill', 20);
quill.incrementAge();
// quill.age = 41;
quill.greeting();
const anotherQuill = {
    anotherGreeting: quill.greeting
};
// anotherQuill.anotherGreeting();
