"use strict";
class Person {
    constructor(initName) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = initName;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}`);
    }
}
;
const quill = new Person('Quill');
quill.greeting();
const anotherQuill = {
    anotherGreeting: quill.greeting
};
// anotherQuill.anotherGreeting();
