'use strict';

/* 
let user = {
    name: "John",
    age: 30
};

user.isAdmin = true;

// console.log(user["isAdmin"]);

user["likes birds"] = true;

let key = "likes birds";

console.log(user);
 */

/* 
let user = {
    name: "john",
    age: 30
};

let key = prompt('Что вы хотите узнать о пользователе', 'name');

alert(user[key]);
 */
/* 
let fruit = prompt('Какой фрукт купить?', 'apple');

let bag = {
    [fruit]: 5,
};

alert(bag.apple); */


/* 
let fruit = 'apple';
let bag = {
    [fruit + ' computers']: 5
};

console.log(bag);

 */


/* 
function makeUser(name,age) {
     return {
         name,
         age
     };
}

let user = makeUser("John", 45);
console.log(user.age);

 */


/* 
let user = {
    name: 'Lenur',
    family: "Islyamov",
    isAdmin: true
};

// console.log( user.noSuchProperty === undefined );

// console.log(user);

console.log('name' in user);
console.log('namqwe' in user);

 */

/* 
let user = {
    name: 'Lenur',
    family: "Islyamov",
    age: 28,
    isAdmin: true
};

for (let key in user) {
    console.log( key );

    console.log( user[key]);
}
 */


/* 
let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
  };
  
  for (let code in codes) {
    console.log(+code); // 1, 41, 44, 49
  }
 */


/*  let user = {
     name: 'Lenur',
     surname: 'Islyamov',
     family: 6
 };
 user.age = 28;

 for (let prop in user) {
     console.log(prop);
 } */


/* 
let user = {};

user.name = 'John';
user.surname = 'Smith';

console.log(user);

user.name = 'Pete';

console.log(user);

delete user.name;

console.log(user);
 */

/* 
let schedule = {};

console.log( schedule.isEmpty === undefined );

schedule["8:30"] = 'get up';
console.log( schedule );

console.log( schedule.isEmpty != undefined );
 */
/* 
let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(obj) {
     for (let key in obj) {
         return false;
     }
    return true;
 }
  */
/* 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Alex: 200
};

let sum = 0;

function summa(salaries) {
    if (salaries != undefined ) {
        for (let key in salaries) {
            sum = sum + salaries[key];
        }
        return sum;
    }
}

console.log( summa(salaries) ); */

/* 
let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
    length: 101,
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
    for (let prop in menu) {
        if (typeof menu[prop] == 'number') {
            menu[prop] *= 2;
        }
    }
}
console.log(menu);
 */
/* 
let user = { name: 'ivan'};
let admin = user;

console.log(user);
console.log(admin);

admin.name = 'Lenur';

console.log(user);
console.log(admin);
 */
/* 
let user = {
    name: "Lenur",
    age: 28
};

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

clone.name = 'Elvina';

console.log(user);
console.log(clone);
 */

/* 
 let user = { name: 'Lenur', canView: false};


 let permissions1 = { canView: true };
 let permissions2 = { canEdit: true };


 Object.assign(user, permissions1, permissions2);



let clone = Object.assign({}, user);

console.log(clone);
 */

/* 
let user = {
    name: "Иван",
    sizes: {
      height: 182,
      width: 50
    }
  };



let b = user;

b.sizes.height = 200;
b.name = 'Lenur';

console.log(user);

console.log(b);
 */
/* 
let user = {
    name: 'Lenur',
    age: 28,
    sayHi() {
        console.log(this.name);
    }
};

let admin = user;
user = null;


user.sayHi();

// console.log(user.sayHi());

console.log(user);
 */

/* 
let user = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
  alert( this.name );
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
user.f(); // Джон  (this == user)
admin.f(); // Админ  (this == admin)

admin['f']();
 */
/* 
let user = {
    firstName: "Илья",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Илья

 */

/* 
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  };
  
  (user.go)()
 */
/* 
function makeUser() {
    return {
      name: "Джон",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name );
 */

/* 
function makeUser() {
    return {
      name: "Джон",
      ref() {
        return this;
      }
    };
  };
  
  let user = makeUser();
  
  alert( user.ref().name ); // Джон
 */
/* 
let calculator = {
    read() {
        this.a = +prompt('Введите первое число', '0');
        this.b = +prompt('Введите первое число', '0');
    },
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
 */

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
  };

  ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep();
