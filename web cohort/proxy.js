const person = {
  id: 6,
  name: 'Nehal',
  password: 'xyz123',
};

const customProxy = new Proxy(person, {
  get(target, prop) {
    if (prop === 'password') {
      throw new Error('Access denied');
    }
    return target[prop];
  },

  set(target, prop, value, receiver) {
    console.log('property: ', prop);
    console.log('target: ', target);
    console.log('value is: ', value);

    console.log('Receiver: ', receiver);
    if (prop === 'id') {
      // skip it and only returns true to prevent modification in original object
      target[prop] = value; // set the value in target object through proxy object
      return true;
    }
    return false;
  },
});

// get password : access denied in error
console.log(`get(): ${customProxy.id}`);

// set
customProxy.id = 33;
console.log('Original object: ', person);
console.log('Proxy object: ', customProxy);
