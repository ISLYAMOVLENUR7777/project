'use strict';

/* let apples = '2',
    oranges = '5';

console.log(+apples + +oranges); */

/* let counter = 3;

let a = counter++;

alert(a);
 */

/* let a = 1, b =1;

let c = ++a;
let d = b++;

alert(c);
alert(d); */

/* console.log( 2 > 1);
console.log( 2 == 1);
console.log( 2 != 1); */

/* let result = 5 > 4;
console.log(result);
console.log(typeof result);

result = +result;
console.log(result);
console.log(typeof result); */

/* let obj = {
    "0": 1,
    0: 2
   };
   
console.log( obj["0"] + obj[0] ); */

/* for(let i=0; i<10; i++) {
    setTimeout(function() {
      alert(i);
    }, 100);
  }
  setTimeout(); */

 /*  for(let i=0; i<10; i++) {
    console.log(i);
  } */

//   alert( 20e-2['toString'](2) );


/* let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed); */

/* let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message ); */

/* let officialName = prompt ('Какое «официальное» название JavaScript?','');

if (officialName == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
} */

/* let number = +prompt('Введите число','');

if (number > 0 ) {
    alert('1');
} else if (number < 0) {
    alert('-1');
} else if (number == 0) {
    alert('0');
} */

let result;
let a = +prompt('Vvedite a', '');
let b = +prompt('Vvedite b', '');

result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);