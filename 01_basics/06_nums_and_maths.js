// *****************Numbers*****************
const balance = new Number(200);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed());

const otherNumber =123.632;
console.log(otherNumber.toPrecision(3));

const hundred =10000000;
console.log(hundred.toLocaleString('en-IN'));

// *******************Maths******************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4.6,3,543,2,44));
console.log(Math.max(4.6,53,6,232,4,22));
console.log(Math.random());

// very importamt concept for game development like chass or ludo 
// random number configuration system 

console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min));

