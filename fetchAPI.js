const dummyAPI = 'https://dummyjson.com/products';

const promiseX = fetch(dummyAPI);

console.log(promiseX);

promiseX
  .then(function (responseX) {
    console.log(responseX); // JSON Object as a string

    let x = 6;

    let pro = responseX.json(); // JSON object -> JavaScript Objects

    let pro2 = pro.then(function (data) {
      return { data, x };
    });

    return pro2;
    // can not return value and Promise object directly like this
    // comma operator returns second value only which is "a"
    // return pro, x;
  })

  .then(function (objectZ) {
    console.log(objectZ); // objectZ (data: {..}, x: 6)
    console.log(objectZ.data); // JavaScript Object (data) {..}
    console.log(objectZ.x); // value (x) :6
  });
