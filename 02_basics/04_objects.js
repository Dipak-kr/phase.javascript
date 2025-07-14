// singleton object 


const tinderUser = {}

tinderUser.id = "123abc",
tinderUser.name ="Dipak",
tinderUser.isloggedIn = true

console.log(tinderUser);

const regularUser ={
    email: 'dipakshah@gmail.com',
    fullname: {
        userfullname:{
        firstname: "Dipak",
        lastname: "shah"
     }
  }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
const obj2 ={11: 'k', 12: 'l', 13: 'm'}

const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 ={...obj1, ...obj2}

console.log(obj3);


// very important

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // returns keys of the object
console.log(Object.values(tinderUser));   // returns values of the object
console.log(Object.entries(tinderUser));  // returns key value pair of the object
