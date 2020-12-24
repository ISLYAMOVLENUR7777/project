'use strict';
/* 
let fruits = ["Яблоко", "Апельсин", "Слива"];
console.log(fruits);

fruits[2] = "Груша";
console.log(fruits);
console.log(fruits.length);
 */

/* 
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { console.log('привет'); } ];

console.log( arr[1].name );

console.log( arr[3]() );
 */

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// console.log( fruits.pop() );
// console.log( fruits );

// fruits.push("Груша");

// console.log( fruits );

// console.log( fruits.shift() );

// console.log( fruits );
/* 
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} : ${fruits[i]}`);
}
 */

/* 
for (let fruit of fruits) {
    console.log(fruit);
}
 */

/* 
let arr = [1, 2, 3, 4, 5];

arr.length = 2;

console.log(arr);

arr.length = 5;

console.log(arr);


let fruits = new Array("Яблоко", "Апельсин", "Слива");
console.log(fruits);
 */
/* 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];


console.log(matrix[1][1]);
 */
/* 
let arr = [1, 2, 3];

console.log(arr);

console.log( String(arr) === '1,2,3' );

console.log( [1] + 1 );
// alert( [1] + 1);
 */


/* 
let styles = ['Джаз', 'Блюз'];
console.log(styles);


styles.push('Рок-н-ролл');
console.log(styles);

styles[ Math.floor((styles.length -1) / 2 ) ] = 'Классика';
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);
 */
/* 
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();
 */
/* let arrNum = [];

function sumInput() {

    let num = prompt('Введите число', '0');
    arrNum.push(+num);
    do {
        let sum = 0;
        for (let n of arrNum) {
            sum = sum + arrNum[n];
        }
        let vichod = num;
        return alert(num);
    } while ( num != null || num != '' || num != Number); 
}

sumInput();
alert(arrNum);
 */

/* 
function sumInput() {

    let arrNumbers = [];
    let sum = 0;

    while(true) {

        let num = prompt('Введите число', '');

        if ( num === null || num === '' || !isFinite(num)) break;
            arrNumbers.push(+num);
    } 

    for (let number of arrNumbers) {
       sum += number;
    }

    return sum;
    
}

alert( sumInput() );
 */
/* 
let arr = [1, 2, 7, 3, 5, -9];
console.log(arr);

function getMaxSubSum(arr) {

    let sum = 0;

    for (let num of arr) {

        if (num > 0) {
            sum == sum + arr[num];
            return sum;
        } return console.log(sum);
    }
}

getMaxSubSum(arr);

 */

/* 
let arr = [-1, 2, 7, 3, 5, -9];
console.log(arr);

let sum = 0;

for (let num = 0; num < arr.length; num++ ) {
    if (arr[num] > 0) {
        sum = arr[num];

    }
    sum = sum + arr[num];
} return console.log(sum);

 */
/* 
let arr = [-1, 2, 7, 3, 5, -9];
console.log(arr);
let sum = 0;

for (let num = 0; num < arr.length; num++) {
    sum = sum + arr[num];
    if (sum < 0) {
        num++;
    } else {

    }
} return console.log(sum);
 */

/* 
function getMaxSubSum(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }


  console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  console.log( getMaxSubSum([1, 2, 3]) ); // 6
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  console.log( getMaxSubSum([-1, -2, -3]) ); // 100
 */



/* 
function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;

        for (let j = 1; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

console.log( getMaxSubSum([-1, -2, -3, -9]) );
 */

/* 
function getMaxSubSum(arr) {
    let maxSum = 0,
        sumFixed = 0;

    for (let item of arr) {
        sumFixed = sumFixed + item;
        maxSum = Math.max(maxSum, sumFixed);
        if (sumFixed < 0) sumFixed = 0;
    }

    return maxSum;
}
console.log( getMaxSubSum([1, 2, 3, -9]) );
 */
/* 
let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 1);

console.log( arr );
console.log( arr.length );
 */
/* 
let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

arr.splice(0, 3, "Давай", "танцевать");

console.log( arr );
 */
/* 
let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(2, 0, "сложный", "язык");

console.log( arr );

 */
/* 
let arr = [1, 2, 5];

arr.splice(-1, 0, 3, 4);

console.log( arr );
 */


/* 
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 2);
  
  console.log(user.name);
 */


/* 
let arr = ["I", "go", "home"];

delete arr[1];

console.log(arr);
console.log(arr.length);
 */
/* 
let arr = [1, 2];

let arrayLike = {
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

let abs = arr.concat(arrayLike);

console.log(abs);

arr.forEach(console.log);
 */
/* 
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`);
  });
 */
/* 
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);
 */

// let arr = [2, 1, 11, -5, 7, 15];
/* 
arr.sort();

console.log(arr);

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arr.sort(compare);

console.log(arr);
 */

/* 
arr.sort( (a,b) => a - b );
console.log(arr);

arr.reverse();
console.log(arr);
 */

/* 
let names = 'Вася, Петя, Маша';

let arr = names.split(', ' || '');

for (let name of arr) {
  console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}


let arrBukv = names.split('');
console.log(arrBukv);
 */
/* 
let names = ['Вася', 'Петя', 'Маша'];

let str = names.join(';');

console.log(str);
 */
/* 
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result);
 */




/* 
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length);
console.log(soldiers[0].age);
console.log(soldiers[1].age);
 */
/* let line = '';
function camelize(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '-') {
            return str[i + 1].toUppercase;
        }
    }
    
    return console.log(str);
}


console.log( camelize("background-color") );
 */


/* 
function camelize(str) {
    return str
        .split('-')
        .map( (word, index) => index == 0 ? word : word[0].toUppercase() + word.slice(1))
        .join('');
}
console.log( camelize("background-color") );
 */


function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }

  console.log(camelize("background-color"));