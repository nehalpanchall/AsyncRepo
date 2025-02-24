'use strict';

const person = {
  id: 6,
  name: 'Nehal',
  isStudent: true,
};

// writable
let a = Object.getOwnPropertyDescriptor(person, 'id');
Object.defineProperty(person, 'id', { writable: false });

person.id = 33;

console.log(person);
