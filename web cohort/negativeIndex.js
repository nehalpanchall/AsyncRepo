let arr = [1, 2, 3, 4, 5];

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);

      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },

    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value; // set to negative index
      } else {
        target[index] = value; // set to positive index
      }
      return true;
    },
  });
}

const proxiedArr = negativeIndex(arr);

// get()
console.log(proxiedArr[-3]);

// set()
proxiedArr[-2] = 'Nehal';
proxiedArr[1] = 'Panchal';

console.log('Proxied Array: ', proxiedArr);
console.log('Original Array: ', arr);

// console.log(proxy[-3]);

// proxy[-1] = 'Nehal';
// console.log('Proxied Array: ', proxy);
// console.log('Original Array: ', arr);
