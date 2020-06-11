//1. 
//age.js

//2. 
function factorial (n) {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

/*3.
The loop never breaks because "counter"'s value can never be greater than 2.
Every loop we set "counter"'s value to 1 and increase it by 1. If we increased
counter by 2, then the break statement would be acted upon. Or, if the looping condition
were a test of "counter"'s value instead of an assignment of its value, we might reach
a state where the test condition evaluates to false and be forced to exit the loop.

4. 
No error message is produced. if statements do not require the increment statement to occur in
on the same line as the counter intitialization and looping condition. Output logged to the console
is: 1, 2, 3, 4, 5.

5.*/
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let tries = 1;
while (randomNumberBetween(1, 50) <= 48) {
  tries += 1;
}
console.log('It took ' + String(tries) + ' tries to get a number greater than 32');

//6.
function recFactorial (n) {
  if (n === 0) return 1
  return n * recFactorial(n - 1);
}
console.log(recFactorial(4));