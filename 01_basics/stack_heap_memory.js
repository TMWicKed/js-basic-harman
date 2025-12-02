// Stack (Primitive), Heap (Non-Primitive)
// When primitive data is defined it goes inside stack from there we get the copy for the use but 
// when non-primitive data is defined it goes inside heap from there you get reference for the orignal value so if any changes are made the orignal value changes as well

let myYoutubeName = "cookWithABachelor"

console.log(myYoutubeName);

let anotherName = myYoutubeName
anotherName = "comeCookWithABachelor"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log(userOne.email);

let userTwo = userOne
userTwo.email = "harman@google.com"

console.log(userOne.email);
console.log(userTwo.email);


