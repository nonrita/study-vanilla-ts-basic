"use strict";
class Person {
    static isAdult(age) {
        if (age > 17)
            true;
        return false;
    }
    ;
    constructor(name, age) {
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
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
    }
}
Object.defineProperty(Person, "species", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'Homo sapiens'
});
;
class Teacher extends Person {
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        Object.defineProperty(this, "_subject", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _subject
        });
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
;
console.log(Person.species);
console.log(Person.isAdult(38));
console.log(Teacher.species);
console.log(Teacher.isAdult(38));
