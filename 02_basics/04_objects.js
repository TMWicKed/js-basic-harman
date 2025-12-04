// Singleton object
// const tinderUser = new Object(); // through Object constructor


//  Non-Singleton object
const tinderUser = {}; // object literal syntax

tinderUser.id = "as12d3fsae23";
tinderUser.name = "Harman";
tinderUser.age = 25;
tinderUser.isLoggedIn = false;
tinderUser.lastLoginDays = ["Monday", "Friday", "Sunday"];

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Harman",
            lastName: "Rashidi"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userFullname.firstName); // optional chaining to avoid errors if any property in the chain is undefined denofined by adding ? before the dot

const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key3: "value3",
    key4: "value4"
};

const obj3 = {
    key2: "newValue2",
    key5: "value5"
};

// const newObject = {obj1, obj2}; // this will create an object with two properties obj1 and obj2, not to be used for merging

// const newObject = {...obj1, ...obj2}; // spread operator to merge objects

let newObject = Object.assign({}, obj1, obj2); // Object.assign to merge objects

// // The first parameter is the target object (an empty object here), and the rest are source objects to copy properties from the later ones will overwrite the earlier ones in case of key conflicts
// newObject = Object.assign({}, obj1, obj2, obj3); // key2 from obj3 will overwrite key2 from obj1

// console.log(newObject);

const users = [
    {
        id: 1,
        email: "a@gmail"
    },
    {
        id: 2,
        email: "b@gmail"
    },
    {
        id: 3,
        email: "h@gmail"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // array of keys
// console.log(Object.values(tinderUser)); // array of values
// console.log(Object.entries(tinderUser)); // array of [key, value] pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

