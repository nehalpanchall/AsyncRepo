const cart = ['A'];

let promiseX = createOrder(cart);
// console.log(promiseX);

// consumer part
promiseX
  .then(function (response) {
    let orderData = JSON.parse(response);
    return orderData;
  })
  .then(function (orderData) {
    console.log(orderData); // JS object
    let payData = proceedToPayment(orderData);
    return payData;
  })
  .then(function (payData) {
    console.log(payData);
  })
  .catch(function (error) {
    console.log(error.name); // Error
    console.log(error.message); // Cart is not valid
    console.log(error.stack); // Error: Cart is not valid (at line number, at filename, at function)
  })
  .then(function () {
    console.log('Finishedddd');
  });

// producer part
function createOrder(cart) {
  let promise = new Promise(function (resolve, reject) {
    if (validateCart(cart)) {
      let orderId = { id: 'order123' };

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

function proceedToPayment(data) {
  let promise = new Promise(function (resolve, reject) {
    let flag = true;
    if (!data) {
      flag = false;
    }

    if (!flag) {
      let paymentId = { id: 'payment123' };
      setTimeout(() => {
        resolve(paymentId);
      }, 3000);
    } else {
      let err = new Error('Payment declined!');
      reject(err);
    }
  });

  return promise;
}
