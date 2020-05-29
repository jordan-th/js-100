let rlSync = require('readline-sync');
let numA = parseFloat(rlSync.question('Enter first number: '));
let numB = parseFloat(rlSync.question('Enter second number: '));
console.log(`${numA} * ${numB} = ${numA * numB}`);