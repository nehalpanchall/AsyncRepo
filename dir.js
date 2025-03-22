const obj = {
  id: 6,
  name: 'nehal',

  abc: function () {
    console.log(this.id);
  },
};

console.dir(obj, { depth: 1 });
console.log(obj);
