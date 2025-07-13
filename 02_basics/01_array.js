// array 

const myArr=[32,42,2.3,"Dipak"];
console.log(myArr[3]); // Dipak



// Array methods

myArr.push(6);
console.log(myArr);  // [ 32, 42, 2.3, 'Dipak', 6 ]

myArr.pop();
console.log(myArr); // [ 32, 42, 2.3, 'Dipak' ]

myArr.unshift(5);
console.log(myArr); // [ 0, 32, 42, 2.3, 'Dipak' ]

console.log(myArr.includes(3)); // false
console.log(myArr.indexOf("Dipak")); // 3

//slice and splice

console.log("A",myArr); 
const myn1 =myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);  // myArr.slice() does not modify the original array

const myn2 = myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);

