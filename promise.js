const cart = [];

let promiseX = createOrder(cart);
// console.log(promiseX);

// consumer part
promiseX
  .then(function (response) {
    let data = JSON.parse(response);
    console.log(data); // JS object
  })
  .catch(function (error) {
    console.log(error);
  });

// producer part
function createOrder(cart) {
  let promise = new Promise(function (resolve, reject) {
    if (validateCart(cart)) {
      let orderId = { id: 'xyz123' };

      setTimeout(() => {
        resolve(JSON.stringify(orderId));
      }, 5000);
      // resolve with data in JSON object after 5 seconds
    } else {
      let err = new Error('Cart is not valid');
      reject(err); // reject with error message
    }

    function validateCart(cart) {
      let flag = false;
      if (cart.length > 0) {
        flag = true;
      }
      return flag;
    }
  });

  return promise;
}
