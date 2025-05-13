let score = "33abc"
let score1 = null
let score2 = undefined

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
 
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN not a number
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// when you convet into number
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true 
// 0 => false
// "" => false
// "asdfghjk" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//****************************************************Operations**************************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);  // 2**3 => 2^3
console.log(2/2);
console.log(2%3);

console.log(3 + 4 * 5 / 3); //this is not prefered as it not very readable 

console.log(((3 + 4) * 5) / 3); //this is much prefered as it is much more readable

console.log(+true); //+ture is possible but true+ is not although this is not advised
console.log(+""); //same goes for this 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
console.log(gameCounter);
console.log(++gameCounter);
console.log(gameCounter++);
console.log(gameCounter);


