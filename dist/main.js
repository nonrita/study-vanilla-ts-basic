"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
hello = 'hello';
const person = {
    name: {
        first: "Jack",
        last: "Smith"
    },
    age: 21,
};
const fruits = ['Apple', 'Banana', 'Grape', 1];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
;
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
let anything = true;
anything = 'hello';
anything = ['hello', 23, true];
anything = {};
anything.fjiafjaj = 'faijfi';
let banana = 'banana';
banana = anything; //string型と宣言しているものにもanyは全てに入れる
let unionType = 10;
let unionTYpes = [21, 'hello'];
const apple = 'apple'; //constで宣言したらLitteral型になる
let clothSize = 'small';
const cloth = {
    color: 'white',
    size: clothSize,
};
cloth.size = 'large';
function add(num1, num2) {
    return num1 + num2;
}
;
function sayHello() {
    // console.log('Hello');
}
// console.log(sayHello());
let tmp;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cd) {
    const doubleNum = cd(num * 2);
    console.log(doubleNum * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
