//Basics
let a =200; //global scope - yesko value change hudaina

if (true) {  //block scope - yesko value change huncha 
let a= 10;
const b =20
//console.log("INNER:",a);
}
//console.log(a);


//function in scope
 function one(){
    const username = "Suraj"
    function two(){
        const website = "youtube.com"
        console.log(username + website);
    }
    //two();
}
    //one()

// if else in scopes 
     if(true) {
        const username ="Dipak"
        if(username==="Dipak") {
            const website =" youtube"
            console.log(username + website);
        }
        // console.log(website);
    }
    // console.log(username);
     
   //********************interesting***************** */ 

   