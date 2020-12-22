'use strict';
/* 
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);
 */

/* 
let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList);

 */
/* 
console.log( "\u00A9" );

console.log( "\u{20331}" );

console.log( "\u{1F60D}" );
 */
/* 
console.log( `The backslash: \\`.length );


let str = `Hello`;

// получаем первый символ
console.log( str[0] ); // H
console.log( str.charAt(1) ); // H

// получаем последний символ
console.log( str[str.length - 1] ); // o
 */
/* 
for (let char of 'Privet') {
    console.log(char);
}
 */
/* 
let str = 'Hi';

str = 'hqwer' + str[1]; // заменяем строку

console.log( str ); // 
 */
/* 
console.log('Interface'.toLowerCase());
console.log('Interface'.toUpperCase());

console.log( 'Interface'[0].toLowerCase() );
 */
/* 
let str = 'Widget with id';

console.log( str.indexOf('d') );
console.log( str.indexOf('wd', 4) );
 */
/* let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа';

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);

    if (foundPos == -1) break;

    alert( `Найдено тут: ${foundPos}` );
    pos = foundPos + 1;
}
 */
/* 
let str = '';

for (let i = 0; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log( str );
 */

/* 
console.log( 'Österreich'.localeCompare('Zealand') );
 */


function ucFirst(str) {
    let strUp = str.toUpperCase();
    str = strUp[0] + str.slice(1);
    return console.log(str);
}

ucFirst("вася");
ucFirst("петя");
ucFirst("");