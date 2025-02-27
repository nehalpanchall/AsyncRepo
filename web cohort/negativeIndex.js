let arr = [1, 2, 3, 4, 5];

// Proxied Array
const proxy = new Proxy(arr, {
  get(target, prop) {
    const index = Number(prop);

    if (index < 0) {
      return target[target.length + index];
    }
    return target[index];
  },
});

console.log(proxy[-3]);
