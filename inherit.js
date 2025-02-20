class A {
  funA() {
    console.log('A');
  }
}

class B {
  funB() {
    console.log('B');
  }
}

B.prototype = A.prototype;

const b1 = new B();

b1.funB();
