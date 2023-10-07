// console.log("console.log 1");
// process.nextTick(() => console.log("This is process.next 1"));
// console.log("console.log 2");

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("This is read file");
});
setTimeout(() => console.log("This is a time out"), 0);
setTimeout(() => console.log("This is a time out"), 500);
setTimeout(() => console.log("This is a time out"), 1000);
Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
process.nextTick(() => console.log("this is a process.nextTick 1"));
