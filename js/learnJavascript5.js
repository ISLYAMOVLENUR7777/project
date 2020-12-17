'use strict';

/* let a = 2 + 4;

switch (a) {
  case 3:
    console.log( 'Маловато' );
    break;
  case 4:
    console.log( 'В точку!' );
    break;
  case 5:
    console.log( 'Перебор' );
    break;
  default:
    console.log( "Нет таких значений" );
} */

/* let browser = prompt('Введите название вашего браузера', '');

if (browser == 'Edge') {
    alert( "You've got the Edge!" );
    } else if (browser == 'Chrome' 
            || browser == 'Firefox' 
            || browser == 'Safari' 
            || browser == 'Opera') {
        alert('Okay we support these browsers too');
        } else {
            alert( 'We hope that this page looks ok!' );
        }
 */

/* 
 let number = +prompt('Введите число между 0 и 3', '');

 switch (number) {
    case 0: 
        alert('Вы ввели число 0');
        break;
    case 1: 
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
 }
 */

/* function showMessage() {
    console.log('Всем привет!');
}
showMessage(); */

/* let userName = 'Lenur';

function showMessage() {
    let message = 'Hello ' + userName;
    console.log(message);
}

showMessage(); */


/* function showMessage(from,text) {
    console.log(from + ': ' + text);
}
showMessage('Lenur','Hello');
showMessage('Lenur','Kak dela'); */

/* function sum(a,b) {
    return a + b;
}
let result = sum(3,4);
console.log(result); */

/* function checkAge(age) {
    if (age > 18) {
        return true;
    } else return confirm('А родители разрешили?');
}
let age = prompt('Сколько Вам лет', '');
if (checkAge(age) ) {
    alert('Доступ получен');
} else {
    alert('Доступ закрыт');
} */


/* function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

showPrimes(130); */

/* let age = +prompt('Сколько вам лет','');

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
} */


/* 
function minNumber(a,b) {
    if (a < b) {
        return a;
    }

    return b;
}

minNumber(1,1);
console.log(minNumber(1,1));
 */

/* 
 function minNumber(a,b) {
    return (a < b) ?  a : b;
 }
//  minNumber(5,-7);
 console.log(minNumber(6,-9));

 */


/*  function pow(x,n) {
     for (let i = 2; i <= n; i++) {
         x = x * x;   
     }
     return x;
 }

 console.log(pow(3,3)); */
/* 
function pow(x,n) {
    let y = x;
    for (let i = 2; i <= n; i++) {
        y = y * x;   
    }
    return y;
}

let x = prompt('Введите число x=','');
let n = prompt('Введите степень n=','');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  } */


/* 
function pow(x,n) {
    return x ** n;
}
let x = prompt('Введите число x=','');
let n = prompt('Введите степень n=','');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }  */


  /* let sum = (a,b) => a + b;
  console.log(sum(2,3));
  console.log(sum);

  let coub = (a) => a ** 3;
  console.log(coub(3));
 */

/* 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );
 */
/* 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?", 
    () => alert("Вы согласились."), 
    () => alert("Вы отменили выполнение.")
  );
 */

 
let a = +prompt('Vvedite chislo','5');

alert('a=' + a);


a *= 2;

alert('a=' + a);