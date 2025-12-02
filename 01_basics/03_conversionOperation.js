let score = "33abc"
let score1 = null
let score2 = undefined

console.log('1',typeof score);
console.log('2',typeof (score));


let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
 
console.log('3',typeof valueInNumber);
console.log('4',valueInNumber); // NaN not a number
console.log('5',typeof valueInNumber1);
console.log('6',valueInNumber1);
console.log('7',typeof valueInNumber2);
console.log('8',valueInNumber2);

// when you convet into number
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log('9',booleanIsLoggedIn);

// 1 => true 
// 0 => false
// "" => false
// "asdfghjk" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log('10',stringNumber);
console.log('11',typeof stringNumber);

//****************************************************Operations**************************************************

let value = 3
let negValue = -value
console.log('12',negValue);

console.log('13',2+2);
console.log('14',2-2);
console.log('15',2*2);
console.log('16',2**3);  // 2**3 => 2^3
console.log('17',2/2);
console.log('18',2%3);

let str1 = "harman"
let str2 = "rashidi"
let str3 = str1 + " " + str2
console.log('19',str3);

console.log('20',"1" + 2);
console.log('21',1 + "2");
console.log('22',"1" + "2");
console.log('23',"1" + 2 + 2);
console.log('24',1 + 2 + "2");


console.log('25',3 + 4 * 5 / 3); //this is not prefered as it not very readable 

console.log('26',((3 + 4) * 5) / 3); //this is much prefered as it is much more readable

console.log('27',+true); //+ture is possible but true+ is not although this is not advised
console.log('28',+""); //same goes for this 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
console.log('29',gameCounter);
console.log('30',++gameCounter);
console.log('31',gameCounter++);
console.log('32',gameCounter);


