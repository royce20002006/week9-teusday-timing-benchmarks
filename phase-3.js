const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  let arr = [];
  let steps = 0;
  for (let i = increment; steps < 10; i += increment) {
    let start = Date.now()
    result = addNums(i);
    let end =Date.now()
    console.log(end - start)
    steps++
    // console.log(i)
    arr.push(result);
    // console.log(result)
  }

  return arr;

}


function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  let arr = [];
  let steps = 0;
  for (let i = increment; steps < 10; i += increment) {
    
    result = addManyNums(i);
    
    steps++
    arr.push(result);
  }
  // console.log(arr);
  return arr;

}


n = 1000000
console.log(`addNums(${n}): `);

addNums10Timing(1000000);

console.log("\n***********\n");


// let startT = Date.now()
n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
// let endT = Date.now();
// console.log(endT - startT)