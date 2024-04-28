class Person {

    constructor(public name: string, private age: number) {
    }

    incrementAge() {
        this.age += 1;
    }

    greeting (this: Person ) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
    }
};

const quill = new Person('Quill', 20);
quill.incrementAge();
// quill.age = 41;
quill.greeting();

const anotherQuill = {
    anotherGreeting: quill.greeting
}

// anotherQuill.anotherGreeting();