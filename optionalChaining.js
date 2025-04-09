// Null: the property exist, but intentionally not assigned its value (value  = null)
// undefined: the property does not even exist

// in case of null: returns null
// in case of undefined: returns undefined

// in both case: chain will be broken (stop evaluating futher)

const user = {
  fname: 'Nehal',
  address: {
    street: '17 Josaly Dr',
    city: null,
  },
};

console.log(user?.address?.street);
console.log(user?.address?.city);
