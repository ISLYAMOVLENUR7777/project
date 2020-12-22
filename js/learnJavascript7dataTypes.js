'use strict';

// const { reduceRight } = require("lodash");

/* 
let roma = {
    name: "Рома",
    sayHi: function() {
        console.log('Привет дружище');
    }
};

roma.sayHi();

let str = "привет";

console.log( str.toUpperCase() );

let n = 1.432567;

console.log( n.toFixed(3) );
 */

/* 
console.log( typeof 0);
console.log( typeof new Number(0) );

let zero = new Number(0);

if (zero) {
  // zero возвращает "true", так как является объектом
  console.log( "zero имеет «истинное» значение?!?" );
}

console.log(null.test);
 */
/* 
let str = "Привет";

str.test = 5;

console.log(str.test);
 */

/* 
let n = 1e-6;

alert(0xff);

let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

alert( a == b );
 */
/* 
let num = 255;

console.log( num.toString(16) );
console.log( num.toString(2) );

let num2 = 1.23456;

console.log( Math.floor(num2 * 100) / 100 );

// alert( 1e500 );

console.log( NaN === NaN );
 */

/* 
let a = 15,
    b = 14;

console.log(Object.is(a, b));
 */
/* 
 console.log( parseInt('100px') );
 console.log( parseFloat('16.45pt') );
 */
/* 
 console.log( Math.random() );
 console.log( Math.random() );
 console.log( Math.random() );
 console.log( Math.random() );
 */

/* 
console.log( Math.max(3, 5, -10, 0, 11) );
console.log( Math.min(3, 5, -10, 0, 11) );
console.log( Math.pow(2, 11) );
 */
/* 
let a = +prompt('Введите первое число', ''),
    b = +prompt('Введите второе число', '');

alert( a + b );
 */

/* 
function readNumber() {
    let num;

    do {
        num = prompt('Введите число', 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') {
    return null;}

    return +num;
}


alert(`Число: ${readNumber()}`);
 */
/* 
function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);
 */

// console.log( Math.random() );

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

console.log( random(1, 3) );
console.log( random(1, 3) );
console.log( random(1, 3) );
console.log( random(1, 3) );
console.log( random(1, 3) );
console.log( random(1, 3) );