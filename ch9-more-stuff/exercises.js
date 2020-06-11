/*1. 
[ 1, 4, 3 ] because array1 and array2 reference the same array in the heap.

2.
We have attempted to read a variable that has not yet been declared. The call
occured in the hello function on line 4, character 15 of the exercise2.js file,
and hello was called from the global level.

3.
console.log(Math.sqrt(37))

4.
console.log(Math.max(2, 4, 1, 4));

5.
A given string is split where any space occurs and each word is an element of an array.
The order of the words in the array is reversed, and then a new array is created
where the wrod is replaced by each word's character length
*/

6.
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));

function allMatches(array, regex) {
  return array.filter(elem => regex.test(elem))
};

/*
7.
It is a process we implement in code to run programs in spite of encountering errors
*/