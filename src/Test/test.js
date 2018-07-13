const a = require('./a');

console.log(a.getThis())

let b = a.getThis;
console.log(b());

console.log((0, a.getThis)())