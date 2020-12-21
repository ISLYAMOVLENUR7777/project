'use strict';
/* 
function User(name) {
    this.name = name;
    this.isAdmin = false;
    alert(new.target);
}

// let user = new User('Vasya');

User();
// console.log(user.name);
// console.log(user.isAdmin);
 */
/* 
function User(name) {
    if (!new.target) {
        return new User(name);
    }

    this.name = name;
}

let vasya = User('Вася');
alert(vasya.name);
 */

/* 
 function BigUser() {
     this.name = "Вася";

     return { name : "Godzilla" };
 }

console.log( new BigUser().name );


function SmallUser() {

    this.name = "Вася";
  
    return; // <-- возвращает this
  }
  
  console.log( new SmallUser().name );  // Вася
 */
/* 
function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("Меня зовут: " + this.name);
    };
}

let vasya = new User("Вася");
vasya.sayHi();
 */
/* 
let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() );
 */
/* 
function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите первое число','0');
        this.b = +prompt('Введите первое число','0');
        };
    
    this.sum = function() {
        return this.a + this.b;
        };
    
    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
 */


function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        this.value += +prompt('Введите число','0');
        };
}



let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений