'use strict';

/* let user = 'Ivan';

alert(user ?? "Anonim");

let firstName = null,
    lastname = null,
    nickname = "SuperKoder";

alert(firstName ?? lastname ?? nickname ?? 'Anonim'); */

/* 
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0 */

/* let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
} */

/* let i = 5;
while (i) console.log(i--); */


/* let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 5); */

/* let i = 10;

for (i = 12; i < 15; i++) {
    console.log(i);
}
console.log(i+10); */


/* let sum = 0;
while (true) {
    let value = +prompt("VVedite chislo", '');

    if (!value) break;

    sum += value;
}

alert('Summa: ' + sum); */


/* for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
} */    //Выводит четные числа

/* outer: for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        let input = prompt(`Значение на координатах (${i},${j})`,'');

        if (!input) break outer;
    }
}
alert('Готово'); */

/* let i = 3;

while (i) {
  console.log( i-- );
} */


/* let i = 0;
while (++i < 5) alert( i ); */


/* for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} */
/* let i = 0;
while (i < 3) {
    console.log(`Number ${i}!`);
    i++;
} */

/* let number;
do {
    number = +prompt('Введите число', 0);
} while (number <= 100 && number );
alert(number);
 */


/* for (let i = 1; i < 10; i++) {
    if ((i % 2 != 0) || (i % 3 != 0)) {
        continue;
    } else {
            console.log(i);
        } 
} */



/*  for (let i = 1; i < 20; i++) {
        out:for (let j = i-1; j > 1; j--) {
            if (i % j == 0) { break out; 
            } else console.log(i);
        }      
} */

/* 

for (let i = 20; i < 2; i--) {
    out: for (let j = i - 1; j < 2; j--){
        if (i % j == 0) {
            break out;
        } else i++;
        console.log(i);
    }
}

 */





/*  out: for (let i = 100; i > 1; i--) {
        for (let j = i-1; j > 1; j--) {
            if (i % j == 0) continue out; 
        }
        console.log(i);
 } */

let n = 19;

nextNumber:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextNumber;
    }
    console.log(i);
}

//Простые числа!!!





