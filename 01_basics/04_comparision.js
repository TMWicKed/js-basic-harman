console.log('a',"2" > 1);
console.log('b',"02" > 1);

console.log('c',null > 0);
console.log('d',null < 0);
console.log('e',null <= 0);
console.log('f',null >= 0);
console.log('g',null == 0);
// the reason for different answers is that equality check(==) and different 
// comparisons(<, >, <=, >=) works differently

console.log('h',undefined == 0);
console.log('i',undefined < 0);
console.log('j',undefined > 0);
console.log('k',undefined <= 0);
console.log('l',undefined >= 0);
// we try to avoide the above written codes for null and undefined as it creates confusion

// === this is called strict check and this comparison also checks for the datatypes
console.log('m',"2" === 2);

