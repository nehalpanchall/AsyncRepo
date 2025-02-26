const person = {
  id: 6,
  name: 'Nehal',
  password: 'xyz123',
};

// proxyPerson object will use in place of original object 'person'
// proxyPerson will redefine the operations like setting, getting, and defining property

const customProxy = new Proxy(person, {
  get(target, prop) {
    if (prop === 'password') {
      throw new Error('Access is denied');
    }
    return target[prop];
  },
});

console.log(customProxy.password);
