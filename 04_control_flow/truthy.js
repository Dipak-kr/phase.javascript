// when mail is given
/*
const userEmail ="dipakshah@gmail.com"

if(userEmail){
    console.log('got user email');
    
}else{
    console.log("Don't have user email");
    
}
    */
/*
value will be falsy when there is no given data 

const userEmail =""

if(userEmail){
    console.log('got user email');
    
}else{
    console.log("Don't have user email");
    
}
    */
/*
when array is given then value will be truty 

const userEmail =[]

if(userEmail){
    console.log('got user email');
    
}else{
    console.log("Don't have user email");
    
}
    */

// falsy value

 // false, 0 , -0, BigInt , 0n, "", null , undefined , NaN

//  Truthy value
// "0",'false' , "  " , [] , function (){}


// how to  check Array is empty

const emptyObj = []
if (emptyObj.length===0) {           //length ===      is used to measure
console.log("array is empty");

}


// how to check the object is empty

const emptyObj1 = {}
if (Object.keys(emptyObj1).length===0) {
    console.log("object is empty"); 
}

/*
// Ternary operator
// condition ? true: false

const icePrice = 100
icePrice >= 80 ? console.log('less than 80'): console.log('more than 90')
*/
