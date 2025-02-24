'use strict';

const person = {
  id: 6,
  name: 'Nehal',
  isStudent: true,
};

// enumerable
Object.defineProperty(person, 'id', { enumerable: false });

// 1. for..in.. loop
for (let i in person) {
  console.log('uisng for..in.. loop: ', i);
}

// 2. Object.keys()
console.log('Object.keys(): ', Object.keys(person));

// 3. Object.values()
console.log(Object.values(person));

// 4. Object.entiries()
console.log(Object.entries(person));

// writable
// let a = Object.getOwnPropertyDescriptor(person, 'id');
// Object.defineProperty(person, 'id', { writable: false });

// person.id = 33;

// console.log(person);
