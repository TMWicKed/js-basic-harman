// // objects can be created using object literal notation
// const person = {
//   name: "Harman",
//   age: 25,
//   isStudent: true,
//   hobbies: ["reading", "coding", "gaming"],
//   address: {
//     city: "Amritsar",
//     state: "Punjab"
//   },
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
// // and through the Object constructor
// const person2 = new Object({
//   name: "Harman",
//   age: 25
// });

// //singleton object
// const singleton = {
//   name: "Singleton",
//   value: 42,
//   getValue: function() {
//     return this.value;
//   }
// };

// /* when we declare an object through literal it is not a singleton and vice versa*/

// *************************************************myCode*************************************************

// object lietrals

const mySym = Symbol("key1");

const jsUser = {
  name: "Harman",
  "full name": "Mohammad Harman Rashidi",  //u cannot access this property using dot notation because it contains a space
  age: 25,
  location: "Agra",
  email: "harman@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  [mySym]: "This is a symbol property",  // using a symbol as a key
}

// console.log(jsUser.email);  // accessing property using dot notation
// console.log(jsUser["email"]);  // accessing property using bracket notation
// console.log(jsUser["full name"]);  // accessing property with space in the name using bracket notation
// console.log(jsUser[mySym]);  // accessing symbol property

// jsUser.email = "harman@chatGpt.com";  // updating property value
// console.log(jsUser.email);  // accessing updated property value

// Object.freeze(jsUser);  // freezing the object to prevent further modifications
// jsUser.email = "harman@qwertyuio.com";  // trying to update a frozen object (will not work)
// console.log(jsUser.email);  // still accessing the original value

// console.log(jsUser);


jsUser.greeting = function() {  // adding a new method to the object
  console.log(`Hello, my name is ${this.name}`);  
}

console.log(jsUser.greeting);  // accessing the new method we get reference to the function but the function is not executed
console.log(jsUser.greeting());  // calling the new method undefined is also printed because the function does not return anything, it just logs to the console
jsUser.greeting();  // calling the new method
