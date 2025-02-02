// // NOTE: async function always returns a promise, no matter what!

// // 1. Primitives will wrap into Promise object because of async function
// async function getData() {
//   return 'nehal';
// }

// let promiseX = getData();

// console.log(promiseX);

// // 2. async function return actual Promise
// async function ninja() {
//   return new Promise((resolve, reject) => {
//     resolve('Ninaja Resolved!');
//   });
// }

// let promiseY = ninja();

// promiseY.then((data) => {
//   console.log(data);
// });

// // 3. async function  retuns both promise and value wrap in a single object
// async function pokemon() {
//   let str = 'Nehal';
//   return new Promise((resolve, reject) => {
//     resolve('resolved value!');
//   }).then((data) => {
//     return { data, str };
//   });
// }

// let promiseZ = pokemon();
// console.log(promiseZ);

// promiseZ.then(function (object) {
//   console.log(object);
//   console.log(object.data);
//   console.log(object.str);
// });

// await keywords can only be used inside an async function
// write await keyword in front of Promise object inside an async function

// old approach to manage Promise using normal function + .then() block
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved');
  }, 8000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved2');
  }, 5000);
});

// function box() {
//   console.log(p1);

//   p1.then((data) => {
//     console.log(data);
//   });
// }

// box();

// manage Promise using async/ await

// 1.
// async function pokemon() {
//   console.log('hello'); // immediately

//   let x = await p1;
//   console.log('Nehal'); // after 5 seconds
//   console.log(x); // after 5 seconds

//   let y = await p1;
//   console.log('Pintu'); // after 5 seconds
//   console.log(y); // after 5 seconds
// }

// pokemon();

// 2. p1: 5 seconds | p2: 8 seconds
// async function pokemon2() {
//   console.log('hello'); // immediately

//   let x = await p1; // 5 seconds
//   console.log('Nehal'); // after 5 seconds
//   console.log(x); // after 5 seconds

//   let y = await p2; // 8 seconds
//   console.log('Pintu'); // after 3 seconds (including 5 seconds)
//   console.log(y); // after 3 seconds (including 5 seconds)
// }

// pokemon2();

// 3. p1: 8 seconds | p2: 5 seconds
async function pokemon2() {
  console.log('hello'); // immediately

  let x = await p1; // 8 seconds
  console.log('Nehal'); // 8 seconds
  console.log(x); // 8 seconds

  let y = await p2; // 8 seconds
  console.log('Pintu'); /// 8 seconds
  console.log(y); // 8 seconds
}

pokemon2();
