// type addFunc = (num1: number, num2:number) => number;
interface addFunc {
    (num1: number, num2:number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

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
