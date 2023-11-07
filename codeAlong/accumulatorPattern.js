//  basic pattern

// create a variable to accumulate

// let num = [2, 5, 6, 10, 100, 40, 42];

// // create algorithm that sums all numbers in a given array

// function sum(numArr){
// // 1. create an accumulator variable
//    let total = 0;
// // 2. Loop

// for(let i=0; i<numArr.length;i++){
//     numArr[i]

//     // may involve if statement

//     // 3. Act of accumulation
//     total += numArr[i]
// }

// // return
// return total;

// }

// // let result = sum(num);
// // console.log(result);

// console.log(sum(num));


// advanced walk through

// let groceryPrices = [
//   10.22, 10.89, 1.11, 8.47, 14.52, 7.96, 15.99, 18.52, 5.99, 9.22, 12.45, 19.31,
//   7.27, 14.96, 5.35, 6.14, 6.61, 11.54, 7.3, 5.55,
// ];

// given list of grocery store prices, create new list of items > $8
// input: [...]
// output: [...]

// function findPricesGreaterThanEight(prices){

// let pricesGreaterThanEight = [];

// // [i] represents value of position
// for(let i=0; i<prices.length; i++){
//     if(prices[i] > 8){
//     pricesGreaterThanEight.push(prices[i]);
//     }
// }

// return pricesGreaterThanEight;

// }
// let result = findPricesGreaterThanEight(groceryPrices);
// console.log(result);


// average of all prices
// input: [...]
// output: number

// find total price of the list of the 3 cheapest items
// input: [...]
// output: [...]


//states and cities code along
// let stateInfo =[
//     {
//         state: "California",
//         cities: ["San Diego", "San Francisco", "Santa Barbara", "Monterey", "Redwood City"],
//     },
//     {
//         state: "Maryland",
//         cities: ["Leonardtown", "St Leonard", "St Mary's City", "Annapolis", "Ocean City"],
//     },
//     {
//         state: "Texas",
//         cities: ["San Antonio", "Austin", "Pflugerville", "Dallas", "Ft Worth", "Paris", "Athens"],
//     },
// ];

// function stateFlattener(states){
//     let cityAccum = [];

//     // dynamically accessing an array for of loops nested into each other
//         for(let state of states){
//         for(let city of state.cities){
//             cityAccum.push(city);
//          } 
//     }
//     return cityAccum;
// }

// let cities = stateFlattener(stateInfo);
// console.log(cities);

    