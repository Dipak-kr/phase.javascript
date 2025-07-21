//Accumulator and currval

/*
const myNums=[1,2,3,4]

const myTotal=myNums.reduce(function(acc , currval) {
    console.log(`acc:${acc} and currval:${currval}`);
    
    return acc+currval
},0)
*/

const shoppingCart=[
    {
        itemName: "js",
        price: 3999
    },
    {
        itemName: "Python",
        price: 6999
    },
    {
        itemName: "Dev",
        price: 4459
    },
    {
        itemName: "app development",
        price: 1599
    },
]

const priceTopay=shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceTopay);
