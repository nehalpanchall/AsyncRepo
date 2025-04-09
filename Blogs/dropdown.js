const buttonElement = document.querySelector('#buttonElement');

function addTtitle() {
  alert('Button clicked!');
}

function textChanged() {
  const textElement = document.querySelector('#textElement');
  console.log(textElement.value);
}

const doSomeMagic = (fun, delay) => {
  let timer;
  return function (...args) {
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
};

const debounce = doSomeMagic(textChanged, 300);
