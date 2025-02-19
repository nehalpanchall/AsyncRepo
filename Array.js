let arr = [];
arr[3] = 'B';
arr[1] = 'A';
arr[10] = 'C';
arr['Name'] = 'Nehal'; // String key
arr[-1] = 'Negative'; // Negative Index
arr[1.5] = 'x';
arr[0] = null;
arr[5] = undefined;

// console.table(arr);
console.log('arr[2]: ', arr[2]);
console.log('Array[0]: ', arr[0]);
console.log('Array[5]', arr[5]);
console.log('Array length: ', arr.length);
console.log('Keys:', Object.keys(arr));
console.log('Values:', Object.values(arr));

delete arr[10];
arr.length = 6;

console.table(arr);
console.log(arr);
console.log(arr.length);

console.log('------------------------');

// arr.filter((item) => console.table(item));

for (let i of arr) {
  console.log('for..of: ', i);
}

for (let i in arr) {
  console.log('for..in: ', i);
