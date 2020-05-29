let rlSync = require('readline-sync');

let a = Number(rlSync.question("First number?\n"));
let b = Number(rlSync.question("Second number?\n"));
console.log(a + b);