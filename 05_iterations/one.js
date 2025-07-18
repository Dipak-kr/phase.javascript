//for loop
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
   */

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");

    }
    // console.log(element);

}
/*
// Tables using for loop

for (let i = 1; i <=20; i++) {
    console.log(`Outer loop value : ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i+ '*'+ j + '='+ i*j);
        
    }
}
*/

const myArray = ["flash","superman","batman","antman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}


//break and continue

for (let index = 1; index <= 20; index++) {
    if( index==5 ){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
    
    
}

for (let i = 1; i <= 20; i++) {
    if(i == 10){
        console.log(`Detected 10`);
        continue;
    }
    console.log(`value of i is ${i}`);
    
}