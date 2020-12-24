'use strict';
/* 
function ucFirst(str) {

    if (str != '') {
        let strUp = str.toUpperCase();
        str = strUp[0] + str.slice(1);
        return console.log(str);
    } console.log("Имя не должно быть пустым");
}

ucFirst("вася");
ucFirst("петя");
ucFirst("");
 */
/* 
console.log( "Widget with id".includes("widget") );


let str = 'Widget with id';
console.log( str.indexOf('widget') );
 */

/* 
function checkSpam(str) {
    str = str.toLowerCase();

    return str.includes('viagra') || str.includes('xxx');
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );
 */
/* 
function truncate(str, maxlength) {
    if (maxlength < str.length) {
        return str.slice(0, maxlength - 1 ) + '…' ;
    } return str;
}
console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
console.log( truncate("Всем привет!", 20) );
 */

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log( extractCurrencyValue('$120') );






