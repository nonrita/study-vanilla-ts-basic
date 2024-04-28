var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'hello';
var person = {
    name: {
        first: "Jack",
        last: "Smith"
    },
    age: 21,
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
;
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
var anything = true;
anything = 'hello';
anything = ['hello', 23, true];
anything = {};
anything.fjiafjaj = 'faijfi';
var banana = 'banana';
banana = anything; //string型と宣言しているものにもanyは全てに入れる
var unionType = 10;
var unionTYpes = [21, 'hello'];
var apple = 'apple'; //constで宣言したらLitteral型になる
var clothSize = 'small';
var cloth = {
    color: 'white',
    size: clothSize,
};
cloth.size = 'large';
function add(num1, num2) {
    return num1 + num2;
}
;
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
var tmp;
