const process = require("process")

console.log(process.env.nodeCheckCount);

const doSomething = () =>console.log("Test");

console.time('doSomething');
process.argv.forEach((val, index)=>{
  console.log(val);
});
console.timeEnd("doSomething");

//console.trace("trace message");