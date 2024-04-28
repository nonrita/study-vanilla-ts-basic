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
}
;
const quill = new Person('Quill');
console.log(quill);
