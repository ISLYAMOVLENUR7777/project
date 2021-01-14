'use strict';

// const { values } = require("lodash");

/* 
let range = {
    from: 1,
    to: 5
  };

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++};
            } else {
                return { done: true};
            }
        }

    };
};


for (let num of range) {
    console.log(num);
}


for (let char of 'test') {
    console.log(char);
}
 */


/* 
let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, а затем 😂
}
 */
/* 
let str = 'Hello';
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();

    if (result.done) break;
    console.log(result.value);
}
 */
/* 
let range = {
    from: 1,
    to: 5
  };

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++};
            } else {
                return { done: true};
            }
        }

    };
};

let arr = Array.from(range, num => num ** 2);

console.log(arr);

 */

/* 
let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));

console.log(map.size);
 */

/* 
let john = { name: "John" };

// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));


let john = { name: "John" };

let visitsCountObj = {}; // попробуем использовать объект

visitsCountObj[john] = 123; // возьмём объект john как ключ

// Вот как это было записано!
alert( visitsCountObj["[object Object]"] );
 */
/* 
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);

  
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap.entries()) {
    console.log(entry);
}
 */
/* 
let obj = {
    name: "John",
    age: 30
  };

let map = Object.entries(obj);

console.log(map);
 */
/* 
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

alert(prices.orange);
 */

/* 
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set);

console.log(set.size);

for (let user of set) {
    console.log(user);
}
 */


/* 
let set = new Set(["апельсин", "яблоко", "банан"]);
for (let value of set) {
    console.log(value);
}
 */
/* let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let set = new Set(values);

function unique(arr) {
    set.forEach((value, value, set) => set.add(value));

console.log( set );
 */
/* 
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(arr) {
    
    return Array.from(new Set(arr));
  }

console.log( unique(values) );
 */
/* 
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
        
}

console.log( aclean(arr) );
 */



let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");


console.log(map.get(1));

console.log(map.get("1"));

console.log(map.size);