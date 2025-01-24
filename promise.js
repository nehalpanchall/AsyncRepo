const cart = ['A', 'B', 'C'];

let promiseX = createOrder(cart);

promiseX
  .then(function (orderId) {
    proceedToPay(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (er) {
    console.log(er.message);
  });
