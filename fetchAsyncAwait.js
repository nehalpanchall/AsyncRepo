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

// Promise.all() with async/await

async function fetchProducts() {
  try {

    let response1 = await fetch('https://dummyjson.com/products/1')
    let data = await response1.json();
    
   


    let [data1, data2] = await Promise.all([

        

        response1.then(function (response){
            return response.json()
        }),


        let two = await fetch('https://dummyjson.com/products/2')
      
      
    ]);

    console.log(data1, data2);
  } catch (error) {
    console.error(error);
  }
}
fetchProducts();




// original Code

async function fetchProducts() {
    try {
      let [data1, data2] = await Promise.all([
        fetch('https://dummyjson.com/products/1').then(res => res.json()),
        fetch('https://dummyjson.com/products/2').then(res => res.json())
      ]);
  
      console.log(data1, data2);
    } catch (error) {
      console.error(error);
    }
  }
  fetchProducts();
  