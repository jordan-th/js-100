let rlSync = require('readline-sync');

function getName(nameType) {
  return rlSync.question(`What's your ${nameType} name? `);
}

console.log(`Hello, ${getName("first")} ${getName("last")}!`);


