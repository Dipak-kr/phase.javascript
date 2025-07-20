// for of
const arr=[1,2,3,4,5,6,7,8]
for (const num of arr) {
   // console.log(num);  
}

const greetings="Dipak shah"
for (const  greet of greetings) {
    //console.log(`${greet}`);
    
}

//maps

const map = new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('FR',"France")
map.set('SKI',"Srilanka")
map.set('pkr',"pakistan")
//console.log(map);

// for of loop in map
for (const [key,value] of map) {
    //console.log(key ,":-", value);
}


// for of loop doesn't iterable in objects.. so we use for in loop

const myObject={
    js:'javascript',
    cpp:'c++',
    html:'Hyper Text Markup Langauge',
    swift:'swift in App'
}

for (const key in myObject) {
    console.log(`${key} is shortform of ${myObject[key]}`);
    
}