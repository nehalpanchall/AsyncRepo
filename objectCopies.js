let person = { name: 'Nehal', id: 6, address: { zip: 666, city: 'Toronto' } };

let copyObj = person;

let copyObj2 = { ...person };

console.log(person);
console.log(copyObj);

copyObj.address.city = 'Scarborough';

console.log(person);
console.log(copyObj);
