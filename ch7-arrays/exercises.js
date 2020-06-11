/*1.
array1 length 4
array2 length 5
array3 length 0
array4 length 3
array5 length 101
*/

/*2.
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];
console.log(myArray.filter(a => a % 2 === 0))
*/

/*3.
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
console.log(myArray.map(a => a.filter(b => b % 2 === 0)));
*/

/*4. 
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
console.log(myArray.map( a => {
  if (a % 2 === 0) return "even"
  else return "odd"
}));
*/

/*5. 
function removeNonInteger(arr) {
  return arr.filter(foo => Number.isInteger(foo));
}
let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray);
*/

/*6. 
function oddLengths(array) {
  return (array.map(elem => elem.length)).filter(leng => leng % 2 !== 0);
};
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
*/

/*7. 
let sumOfSquares = function(arr) {
  return arr.reduce((accu, ele) => accu + ele**2, 0);
}
let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers));
*/

/*8. 
let oddLengths = function(array) {
  return array.reduce((accu, elem) => {
      if (elem.length % 2 === 1) {
        return accu.concat(elem.length)
      }
  }, []);
} 
let arr = ['a', 'abc', 'abcde', 'abc', 'a'];
console.log(oddLengths(arr));
*/

/*9. 
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));
*/

/*10.
let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
console.log(arr[1].splice(2, 1));
console.log(arr);
*/