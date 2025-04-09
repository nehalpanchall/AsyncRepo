// first check left side
// if left side: nullish value (null or undefined)
// it will use the right side value
// it does not consider other falsy value

const port1 = 1 ?? 2;
const port2 = undefined ?? 2;
const port3 = null ?? 2;
const port4 = 0 ?? 2;

console.log('PORT 1:', port1);
console.log('PORT 2:', port2);
console.log('PORT 3:', port3);
console.log('PORT 4:', port4);
