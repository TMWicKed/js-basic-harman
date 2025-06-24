// array

const myArr = [0,1,2,3,4,5,/*true,'harman'*/]  //no need for the elements to be of the same type
const myHeros = ['shaktiman', 'naagraj']
const myArr2 = new Array(1,2,3,4)

// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr2);

// // Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()  // removes an element from the end of the array
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)  // adds an element at the starting of the array
// console.log(myArr);
// myArr.shift()  // removes an element from the starting of the array
// console.log(myArr);

// console.log(myArr.includes(5));  //it returns true or false on the basis if the no. is present or not
// console.log(myArr.includes(9));

// console.log(myArr.indexOf(5));  //it returns the index of the element 
// console.log(myArr.indexOf(9));  //it returns -1 if the element is not present

// const newArr = myArr.join()  //converts the array into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// // slice and splice 

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)  //returns a subarray that includes the starting index and excludes the ending index but the orignal array remains intact that is myArr in this case
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)  //returns a subarray that includes the starting and the ending index but it also removes the same subarray from the orignal 
// console.log(myn2);
// console.log("C ", myArr);