let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;
hello = 'hello';

const person = {
    name: {
        first: "Jack",
        last: "Smith"
    },
    age: 21,
};
const fruits = ['Apple', 'Banana', 'Grape', 1];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
};

const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};

let anything: any = true;
anything = 'hello';
anything = ['hello', 23, true];
anything = {};
anything.fjiafjaj = 'faijfi';
let banana = 'banana';
banana = anything;  //string型と宣言しているものにもanyは全てに入れる

let unionType: number | string = 10;
let unionTYpes: (number | string)[] = [21, 'hello'];

type ClothSize = 'small' | 'medium' | 'large';
const apple = 'apple'; //constで宣言したらLitteral型になる
let clothSize: ClothSize = 'small';
const cloth: {
    color: string,
    size: ClothSize,
} = {
    color: 'white',
    size: clothSize,
}
cloth.size = 'large';

function add(num1: number, num2: number) {
    return num1 + num2;
};

function sayHello(): void {
    // console.log('Hello');
}
// console.log(sayHello());
let tmp: undefined;

const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
    return num1 + num2;
};

const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cd: (num: number) => number): void {
    const doubleNum = cd(num * 2);
    console.log(doubleNum * 2);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is an error'));

