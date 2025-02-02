const dummyAPI = 'https://dummyjson.com/products';

// Normal function + .then() block

// function fetchD() {
//   let promise = fetch(dummyAPI);
//   promise
//     .then(function (response) {
//       let jsObj = response.json();
//       return jsObj;
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// fetch() using async/await
async function fetchData() {
  let response = await fetch(dummyAPI);

  let x = await response.json();

  console.log(x.products);
}

fetchData();
