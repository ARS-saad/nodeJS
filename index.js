// const add = require('./add');

// console.log('Hello world');

// const sum1 = add(1, 4);
// console.log(sum1);

// require("./superman");
// require("./batman");

// const math = require("./math");

// console.log(math.add(5, 6));
// console.log(math.sub(7, 4));

// var a = "Hello world";
// console.log(a);

var path = require("node:path");
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
