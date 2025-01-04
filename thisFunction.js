function box() {
  console.log("hello" + this);
}

const obj = {
  box,
};

obj.box();
