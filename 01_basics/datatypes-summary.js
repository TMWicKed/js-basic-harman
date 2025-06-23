// # Premetive
// 7 types -> String, Number, Boolean, null, undefined, BigInt, Symbol(if we need to make a button unique we wrap it around symbol) 

const score = 100  //number
const scoreValue = 100.3  //number

const isLoggedIn = false //boolean
const outsideTemp = null  //null

let username;  //undefined

const id = Symbol('123')  //symbol
const anotherId = Symbol('123') //symbol

console.log(id == anotherId);  //though the value is same it won't be same cause they are unique

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

