interface Nameable {
    name: string,
}

interface Human extends Nameable {
    age: number,
    greeting(message: string): void,
}

class Developer implements Human {
    constructor(public name: string, public age: number, public experience: number){}

    greeting(message: string): void {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'natanuki',
    age: 30,
    experience: 5,
    greeting(message: string): void {
        console.log(message);
    }
};
const user: Human = tmpDeveloper;
