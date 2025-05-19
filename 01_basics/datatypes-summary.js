// # Premetive
// 7 types -> String, Numbers, Boolean, null, Symbol, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let username;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 12345678901234567890n //if the number is too big adding n after the number makes it bigInt

// # Reference (Non-Premetive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]  //array

//object
let myObj = {
    name: "harman",
    age: 22
}

//in javascript u can treat function as a variable 
const myFunction = function () {
    console.log("Hello for within the function");
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof username);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

