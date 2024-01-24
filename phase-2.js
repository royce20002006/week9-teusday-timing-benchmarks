const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let arr = [];
  let steps = 0;
  for (let i = increment; steps < 10; i += increment) {
    result = addNums(i);
    steps++
    // console.log(i)
    arr.push(result);
    // console.log(result)
  }
  console.log(arr)
  return arr;
}

console.log(addNums10(10));

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

}

module.exports = [addNums10, addManyNums10];
