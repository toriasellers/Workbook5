//  basis pattern

// create a variable to accumulate

let num = [2, 5, 6, 10, 100, 40, 42];

// create algorithm that sums all numbers in a given array

function sum(numArr){
// 1. create an accumulator variable
   let total = 0;
// 2. Loop

for(let i=0; i<numArr.length;i++){
    numArr[i]

    // may involve if statement

    // 3. Act of accumulation
    total += numArr[i]
}

// return
return total;

}

// let result = sum(num);
// console.log(result);

console.log(sum(num));