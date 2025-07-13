//dates

let myDate = new Date();
console.log(myDate.toString());  //Sun Jul 13 2025 17:48:52 GMT+0545 (Nepal Time)
console.log(myDate.toDateString());   //Sun Jul 13 2025
console.log(myDate.toJSON());   //2025-07-13T12:03:52.927Z
console.log(myDate.toLocaleDateString());  //7/13/2025
console.log(myDate.toISOString());  //2025-07-13T12:03:52.927Z
console.log(myDate.toUTCString());  //Sun, 13 Jul 2025 12:03:52 GMT
console.log(myDate.getTimezoneOffset()); //-345
console.log(myDate.getFullYear()); //2025
console.log(typeof myDate);  //object 



let myCreatedDate= new Date(2026,9,28);
console.log(myCreatedDate.toString()); //Mon Oct 28 2026 00:00:00 GMT+0545 (Nepal Time)
console.log(myCreatedDate.toLocaleString()); //10/28/2026, 12:00:00 AM


let myTimestamp = Date.now()
 console.log(myTimestamp); //1700000000000
 console.log(myCreatedDate.getTime()); //1700000000000
 

 let newDate = newDate()
 console.log(newDate);
 console.log(newDate.getTime());
 console.log(newDate.getFullYear()); 
 console.log(newDate.getDay());  //0 for Sunday, 1 for Monday, etc.

//Date.now() returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
let currentTimestamp = Date.now();
console.log(currentTimestamp); //e.g., 1700000000000

// newDate.toLocaleString('default',{
//     weekday:'long',
//     year:'numeric'
// });
 
 
 
 