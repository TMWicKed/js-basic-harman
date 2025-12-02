let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof(myDate));


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());
let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);  //the value we get is in milliseconds
console.log(myCreatedDate3.getTime());  //gets the milliseconds time from the date 
console.log(Math.floor(Date.now()/1000));  //convert milliseconds into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  //the month is strating from 0 is jan 1 is feb so we do +1
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    //inside this by clicking Ctrl+space we can see properties
    weekday: "long",  //this and so on
    day: "numeric",
    month: "long",
    year: "numeric"
})
console.log(newDate.toDateString());
