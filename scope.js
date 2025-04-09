let x = 6;

function grandParent() {
  let a = 1;

  function parent() {
    let b = 2;

    function child() {
      let c = 3;

      console.log(c);
      console.log(b);
      console.log(a);
      console.log(x);
    }
    child();
  }
  parent();
}

grandParent();
