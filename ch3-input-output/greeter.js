let rlSync = require('readline-sync');
let fname = rlSync.question("What's your first name? ");
let lname = rlSync.question("What's your last name? ");
console.log(`Hello, ${fname} ${lname}!`);