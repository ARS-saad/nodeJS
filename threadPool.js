// const fs = require("node:fs");

// console.log("First");

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   console.log("File contents");
// });

// console.log("Last");

const crypto = require("node:crypto");

const start = Date.now();
console.log("Hash: ", Date.now() - start);
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);
