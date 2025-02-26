const person = {
  id: 6,
  name: 'Nehal',
  password: 'xyz123',
};

// proxyPerson object will use in place of original object 'person'
// proxyPerson will redefine the operations like setting, getting, and defining property

const customProxy = new Proxy(person, {
  get(target, prop) {
    console.log('Target object: ', target);
    console.log('property (key): ', prop);
    return target[prop];
  },
});

console.log('returned property from get() handler (value): ', customProxy.id);
