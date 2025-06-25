const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash", "aquaman", "black panther"]

// marvel_heros.push(dc_heros)  // Adding the entire dc_heros array to marvel_heros array into an array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // Accessing "batman" from the nested array

// console.log(marvel_heros.concat(dc_heros)); // Concatenating marvel_heros and dc_heros arrays

// console.log([...marvel_heros, ...dc_heros]); // Using spread operator to merge arrays

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// console.log(another_array.flat(Infinity)); // Flattening the array to infinity depth

// console.log(Array.isArray("Harman"));  // Checking if "Harman" is an array
// console.log(Array.from("Harman")); // Converting string to array
// console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // Creating an array from an object with a length property
// console.log(Array.of(1, 2, 3, 4)); // Creating an array from a list of arguments
// console.log(Array.of(1, 2, 3, 4).fill(0)); // Filling an array with a specific value
// console.log(Array.of(1, 2, 3, 4).fill(0, 1, 3)); // Filling a portion of an array with a specific value

// console.log(Array.from({name: "Harman"}));  //interesting case, this will not convert the object to an array as it does not have a length property
// console.log(Array.from({ length: 2, 0: "Harman", 1: "Singh" })); // Converting an object with a length property to an array
// console.log(Array.from({ length: 2, 0: "Harman", 1: "Singh" }, (value, index) => `${index}: ${value}`)); // Converting an object with a length property to an array with a mapping function

const funcName = function() {
  return{
    name: "Harman",
    age: 25
  }
};

console.log(Array.from(Object.entries(funcName()))); // Converting the object returned by funcName to an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));