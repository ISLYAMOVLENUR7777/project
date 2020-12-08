"use strict";

if ( 4 == '4') {
    console.log('Ok');
} else {
    console.log('Error');
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Slishkom mnogo');
// }   else {
//         console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

switch (num) {
    case 49: 
        console.log('Neverno');
        break;
    case 100: 
        console.log('Neverno');
        break;
    case 51: 
        console.log('V tochku');
        break;
    default: 
        console.log('Ne v etot raz');
        break;
}