const score = 400
// console.log(score);

// doing the below will define this no. as an object and will give us some pre-defined methods to work
// on this object though they are less then string
const balance = new Number(100)
// console.log(balance);
// console.log(typeof(balance));
// console.log(typeof(balance.toString()));
// console.log(balance.toFixed(2));

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8966
// console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 1123.8966
// console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // give commas in between numbers makes counting easy

// +++++++++++++++++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// what if we want a randon number between given two numbers
const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

