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