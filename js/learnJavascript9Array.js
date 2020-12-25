'use strict';
/* 
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b) );
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
 */

/* 
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    arr.forEach(item, index, arr) => { 
        if (item >= 1 && item <= 4) {
            arr.splice(item,1);
        } 
    }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
 */
/* 
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            } else {
                arr.splice(i, 1);
            }
    }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);
 */


/* 
let arr = [5, 2, 1, -10, 8];

arr.sort()
    .reverse();

console.log(arr);
 */
/* 
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
console.log(arr);
 */
/* 
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let arrSort = arr.slice();
    return arrSort.sort();
}

let sorted = copySorted(arr);

console.log( sorted );
console.log(arr);
 */
/* 
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log( sorted );
console.log( arr );
 */


/* 

function calculate(str) {
    let arr = str.split('+');
        arr = arr.join();
        arr = arr.spread();
    
    //let result = arr.reduce((sum, current) => sum + current, 0);
    //console.log(result);
    return typeof arr;
}

console.log( calculate("3 + 7") );
 */
/* 
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }


  let powerCalc = new Calculator;
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  let result = console.log(powerCalc.calculate("2 ** 3"));

 */

/* 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = [];
for (let i = 0; i < users.length; i++) {
    names[i] = users[i].name;
}

console.log(names);
 */
/* 
let names = users[0].name(function(item))

console.log(users[0].name); */

// let names = 


/* 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names);
 */
/* 
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`, 
    id: user.id}));

console.log(usersMapped);

console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );
 */

/* 
let petya = { name: "Петя", age: 30 };
let vasya = { name: "Вася", age: 25 };
let masha = { name: "Маша", age: 28 };

let arr = [ petya, vasya, masha ];

sortByAge(arr);

function sortByAge(arr) {
    let sortArr = arr.age.sort();
    return sortArr;
}

console.log( sortByAge(arr) );
 */
/* 
let petya = { name: "Петя", age: 30 };
let vasya = { name: "Вася", age: 25 };
let masha = { name: "Маша", age: 28 };

let arr = [ petya, vasya, masha ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(arr);

console.log( arr );
 */
/* 
let arr = [1, 2, 3];

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}
shuffle(arr);
console.log( arr );

shuffle(arr);
console.log( arr );

shuffle(arr);
console.log( arr );
 */
/* 
let arr = [1, 2, 3];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() *(i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);
 */




/* 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let result = arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
    return console.log(result);
}

getAverageAge(arr);
 */

/* 
function unique(strings) {
    return strings.map((a, b) => (a == b) ? 1 : -1);
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];

  unique(strings);

  
  console.log( strings );
 */

/* 
function unique(arr) {
    for (let i = 0; i < strings.length; i++) {
        for (let j = 1; j < (strings.length - 1); j++) {
            (strings[i] == strings[j]) ? strings[j].splice(j, 1) : strings[j].splice(j); 
        }
    }
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) );

 */
/* 
let result = [];

function unique(arr) {
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) );
 */

/* 
let range = {
    from: 1,
    to: 5
  };

console.log(range);

 */


/* 
console.log(null + {0:1}[0] + [,[1],][1][0]);

let obj = {'1': 0, 1: 1, 0: 2};

console.log(obj['1']);
 */
/* 
function f() {
    let a = 5;
    return new Function('b', 'return a + b');
  }
  
  console.log( f()(1) );
 */

console.log( +"Infinity" );


let f = function(x) {
    console.log(x);
  }
  
  (function() {
    f(1);
  }());

