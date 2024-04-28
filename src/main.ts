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

console.log(coffee);

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