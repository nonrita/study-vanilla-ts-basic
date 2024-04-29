// type addFunc = (num1: number, num2:number) => number;
interface addFunc {
    (num1: number, num2:number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

type Nameable = {
    name?: string,
    nickName? : string,
}
const nameable: Nameable = {
    name: 'kenken',
    nickName: 'kenchan'
}

interface Human extends Nameable {
    age: number,
    greeting(message: string): void,
}

class Developer implements Human {
    constructor( public age: number, public experience: number,public name?: string){}

    greeting(message: string = 'Hello'): void {
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
const user: Human = new Developer(21, 3, 'ken');
if (user.name) {
    user.name.toUpperCase();
}
console.log(user.name);
