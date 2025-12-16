// Dates

let myDate = new Date()  //Date Object
console.log(myDate);   //2025-12-16T13:55:17.880Z

console.log(myDate.toString());  //Tue Dec 16 2025 13:52:20 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());    //Tue Dec 16 2025
console.log(myDate.toISOString());    //2025-12-16T13:49:18.600Z
console.log(myDate.toJSON());        //2025-12-16T13:51:41.620Z
console.log(myDate.toLocaleString()); //12/16/2025, 1:52:20 PM

console.log(typeof myDate);



//**********Decelaration************//
let myCreatedDate = new Date(2023,0,27)  
console.log(myCreatedDate.toDateString()); //Fri Jan 27 2023

let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());  //1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());

//*************Timestamp**************/

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let createdDate = new Date("2023-01-14")
console.log(createdDate.getTime());

console.log(Math.floor(Date.now()/1000)); // It will give value in second


let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// Customise Date Format
newDate.toLocaleString('default',{
    weekday: "long",
})









