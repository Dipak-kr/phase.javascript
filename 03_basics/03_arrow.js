const user= {
    username: "Dipak",
    age:23,
    welcomeMassage: function(){
       console.log('${this.usernmae}, welcome to my website');
       
        console.log(this);
        
    }

}
// user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()
// console.log(this);

// function laptop(){
//     console.log(this);
    
// }
// laptop()

// const mobile=function (){
//     username : "Dipak"
//     console.log(this.username);
    
// }


// now arrow function

const addTwo =(num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4));
