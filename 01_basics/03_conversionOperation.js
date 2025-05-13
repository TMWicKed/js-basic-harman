let score = "33abc"
let score1 = null
let score2 = undefined

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
 
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN not a number
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

// when you convet into number
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 => true 
// 0 => false
// "" => false
// "asdfghjk" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


