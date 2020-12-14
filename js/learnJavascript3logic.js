'use strict';

/* let message = (login == 'Сотрудник') ? 'Привет':
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина' : ''; */

/* if (1 || 0) { // работает как if( true || false )
    console.log( 'truthy!' );
  }

  let hour = 9;

  if (hour < 10 || hour > 18) {
    console.log( 'Офис закрыт.' );
  } */

/* let age = 45;
if ((age >= 14) && (age <= 90)) {
    console.log('Vi nam podhodite');
} */
let password;
let login = prompt('Введите ваш логин', '');

if (login == 'Админ') {
    password = prompt(' Введите пароль', '');
        if (password == 'Я главный') {
            alert('Здравствуйте!');
        } else if (password == 'null' || password == '') {
            alert('Отменено!');
        } else {
            alert('Неверный пароль!');
        }
    } else if (login == '' || login == 'null') {
        alert('Отменено');
    } else {
        alert('Я вас не знаю');
    }