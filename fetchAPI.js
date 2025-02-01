const dummyAPI = 'https://dummyjson.com/products';

const promiseX = fetch(dummyAPI);

console.log(promiseX);

promiseX
  .then(function (responseX) {
    console.log(responseX); // JSON Object as a string

    let pro = responseX.json(); // JSON object -> JavaScript Objects

    return pro;
  })

  .then(function (jsObj) {
    console.log(jsObj); // JavaScript Object
  });
