// for each
//Object in array with forEach loop.....
const myCoding =[
    {
        langauge: 'javascript',
        langaugeFileName:'js'
    },
    {
        langauge: 'java',
        langaugeFileName:'java'
    },
    {
        langauge: 'python',
        langaugeFileName:'py'
    }
]

myCoding.forEach( (item)=>{
        //  console.log(item.langaugeFileName);    
} )



const coding=['js','py','html','css']
const values = coding.forEach ( (item)=>{
        console.log(item);
        return item
        
})
console.log(values);



const myNums=[1,2,3,4,5,6,6,7,8,9,10]

// const newNums=myNums.filter( (num)=>{
//     return num>4})
// console.log(newNums);

const newNums=[]

myNums.forEach(  (num)=>{
      if (num >4) {
        newNums.push(num)
      }
})
// console.log(newNums);


