// let nums = [1,2,3,4,5,6,7,8,9,10];

// function actionToRunPerEl(num){
//     console.log(num);
// }

// for(let num of nums){
//     console.log(num);
// }

// nums.forEach(function(num,index){
//     console.log();
// })

// let arrofArrs = [[],[],[],[],[],[]];

// let newArr = arrofArrs.map(function(arr){
//     return[1];
// });

// let mappedArr = nums.map(function(num){
//     return num*2;
// });

// console.log(mappedArr);

// let nums = [10, 8, 42, 100]; //160
// let total = nums.reduce(function(accum,curr){
//     return accum + curr;
// }, 0);

let purchasedOptions = [
    {item: "A/C", price: 1019.00},
    {item: "Sunroof", price: 699.99},
    {item: "AM/FM Stereo w/ cassette player", price: 199.00}
];

let totalPrice = purchasedOptions.reduce(function(accum,curr){
    return accum + curr.price 
},0);

console.log(totalPrice);

