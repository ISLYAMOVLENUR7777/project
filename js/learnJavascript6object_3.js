'use strict';

/* let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 == id2);

console.log(id1);

console.log(typeof id1);

console.log(id1.toString());

let id3 = id1.toString();

console.log(typeof id3);

alert(id1.description);
 */

/* 
let user = {
    name: 'Вася'
};

let id = Symbol('id');

user[id] = 1;

console.log( user[id] );
console.log(user);
 */
/* 
let id = Symbol("id");

let user = {
  name: "Вася",
  age: 30,
  [id]: 123 // просто "id: 123" не сработает
};

console.log(user);
for (let key in user) {
    console.log(key);
}

let clone = Object.assign({}, user);

console.log(clone);
 */
/* 
 let id = Symbol.for('id');

 let idAgain = Symbol.for('id');

 console.log( id === idAgain );
  */
/* 
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

console.log( Symbol.keyFor(sym));
console.log( Symbol.keyFor(sym2));
 */
/* 
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
console.log( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

console.log( localSymbol ); // name
console.log( globalSymbol ); // name
 */

/* 
let user = {
    name: 'John',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == 'string' ? `{name: '${this.name}'}` : this.money;
    }
};

alert(user);
alert(+user);
alert(user + 500);
 */

/* 
let user = {
    name: "John",
    money: 1000,

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf()  {
        return this.money;
    }
};

alert(user);
alert(+user);
alert(user + 500);
 */

let obj = {
    toString() {
        return "2";
    }
};

alert(obj * 2);
alert(obj + 2);