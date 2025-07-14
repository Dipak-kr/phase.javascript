const myHeros =["thor","spiderman","Ironman","hulk"];
const dc_heros =["batman","superman","flash"];

myHeros.push(dc_heros);

console.log(myHeros);
console.log(myHeros[3][2]);  

myHeros.concat(dc_heros);   //concatenates two or more arrays and returns a new array without modifying the original arrays.
console.log(myHeros);

const all_new_heros = [...myHeros,...dc_heros];  // Spread operator to merge arrays
console.log(all_new_heros);


const anotherArr = [1,2,3,4,[5,6,7,],[8,[9,0]]]
const realantoherArr = anotherArr.flat(Infinity);  // Flattens the array to a specified depth, Infinity means it will flatten all levels.
console.log(realantoherArr);


console.log(Array.isArray("Dipak"));
console.log(Array.from("Dipak"));


// Array.of() creates a new array instance from a variable number of arguments, regardless of their type.
let score1=100;
let score2=200;
let score3=300;
let score4=400;
console.log(Array.of(score1,score2,score3,score4));  // Of creates a new array instance from a variable number of arguments, regardless of their type.

