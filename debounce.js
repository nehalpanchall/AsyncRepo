let counter = 0;

function getData() {
  console.log('debouncing', counter++);
}

function doSomeMagic(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let betterFunction = doSomeMagic(getData, 300);
