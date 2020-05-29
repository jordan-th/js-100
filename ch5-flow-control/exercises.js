/*1.
false || (true && false); FALSE
true || (1 + 2); TRUE
(1 + 2) || true; 3*
true && (1 + 2); 3*
false && (1 + 2); FALSE
(1 + 2) && true; TRUE
(32 * 4) >= 129; FALSE
false !== !true; FALSE
true === 4; FALSE
false === (847 === '847'); TRUE
false === (847 == '847'); FALSE
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; TRUE

2.
function evenOrOdd(num) {
  if (num % 2 === 0) console.log('even')
  else console.log('odd')
}

3.
function evenOrOdd(num) {
  if (!Number.isInteger(num)) console.log('number must be an integer')
  else if (num % 2 === 0) console.log('even')
  else console.log('odd')
}

4.
'Product2'
'Product3'
'Product not found!'
Because there is not break following case '113''s statement
our program will print all statements following.

5.
if (foo()) return 'bar';
else return qux();

6.
'Not Empty' because an empty array is truthy

7. */
function capify(str) {
  if (str.length > 10) return str.toUpperCase()
  else return str
} 

console.log(capify('this string has more than ten characters'));

//8.
function question8 (num) {
  if (num < 0) console.log('Less than 0')
  if (num >= 0 && num <= 50) console.log('Between 0 and 50')
  if (num > 50 && num <= 100) console.log('Between 51 and 100')
  if (num > 100) console.log('Over 100')
};
question8(4.38292834);
