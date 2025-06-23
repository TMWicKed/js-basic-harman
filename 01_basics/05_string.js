const name = "harman"
const repoCount = 50

console.log(name+repoCount+" value");
// we don't suggest the use of the above method for concatination as it is outdated 
// rather use backtick -> (`) this symbol which works on the concept of String interpulation

// String interpolation is a way to insert expressions, variables, or other values directly into a
// string literal, creating a more readable and convenient way to format strings. It essentially 
// replaces placeholders in a string with their corresponding values. 

console.log(`Hello my name is : ${name} and repo count is : ${repoCount}`);

const gameName = new String('harman')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

// const gameName = new String('harman')

// slice can work with negative values but you u have to give the accurate end index of your string
const anotherString = gameName.slice(-4,6)
console.log(anotherString);

const newStringOne = "        harman         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harman.com/harman%20rashidi"

console.log(url.replace('%20', '-'));

console.log(url.includes('harman'));

const gameName1 = new String('harman-hc-com')

console.log(gameName1.split('-'));

