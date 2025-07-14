// singleton object

// objest literal

const JsUser ={
    name:"Dipak",
    age:23,
    location:"Brt",
    email:"dipakshah@gmail.com",
    isloggedIn:true,
    lastloginDays:["sunday","monday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log();
JsUser.email = "dipakshah@gmail.com"

// Greeting function in object

JsUser.greeting = function(){
    console.log("Hello,I am Dipak");  
}
// JsUser.greetingTwo = function(){
//     console.log("Hello,I am JsUser, ${this.name}");
// }
console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

