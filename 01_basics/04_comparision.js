console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null >= 0);
console.log(null == 0);
// the reason for different answers is that equality check(==) and different 
// comparisons(<, >, <=, >=) works differently

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
// we try to avoide the above written codes for null and undefined as it creates confusion

// === this comparison also checks for the datatypes
console.log("2" === 2);

