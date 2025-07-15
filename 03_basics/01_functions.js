//Function is easy 
// pahila function lekh and paranthesis () then curly bracks use garera funtion ko defination pura garne 

function sayMyName() {
console.log("D");
console.log("I ");
console.log("P");
console.log("A");
console.log("K");
}
 sayMyName();  //basics function

function addTwoNumbers(num1,num2) {
    console.log(num1+num2);   
}
addTwoNumbers()  //funtion with parameters (num1 and num2)
addTwoNumbers(3,4) //function with parameters(num1,num2) and arguments(3,4)

//if else statement in function
function loginUserMassage(username){
    if(username === undefined){
        console.log('Please enter your username');
        return
    }
    return  "${username} just looged in"
}
console.log(loginUserMassage('Dipak')); //function with parameters(username) and argument('Dipak')



function calculateCartPrice(...num1){
     return num1
}
console.log(calculateCartPrice(200,400,500));


//Object in function
const user={
    username:"Dipak",
    price:200
}
function handleObect(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

//Array in function
const myNewArray =[100,300,400,31,444];
function secondValue(getArray){
    return getArray[1];
}
console.log(secondValue(myNewArray));
console.log(secondValue([100,200,300,400]));
