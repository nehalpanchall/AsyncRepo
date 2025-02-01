// NOTE: async function always returns a promise, no matter what!

// 1. Primitives will wrap into Promise object because of async function
async function getData() {
  return 'nehal';
}

let promiseX = getData();

console.log(promiseX);

// 2. async function return actual Promise
async function ninja() {
  return new Promise((resolve, reject) => {
    resolve('Ninaja Resolved!');
  });
}

let promiseY = ninja();

promiseY.then((data) => {
  console.log(data);
});

// 3. async function  retuns both promise and value wrap in a single object
async function pokemon() {
  let str = 'Nehal';
  return new Promise((resolve, reject) => {
    resolve('resolved value!');
  }).then((data) => {
    return { data, str };
  });
}

let promiseZ = pokemon();
console.log(promiseZ);

promiseZ.then(function (object) {
  console.log(object);
  console.log(object.data);
  console.log(object.str);
});
