//1.
let name = "Jordan " + "Thomas";

//2.
let num = 4936
let ones = num % 10;
console.log("ones: " + ones);
let tens = (num - ones) % 100;
console.log("tens: " + (tens / 10));
let hundreds = ((num - ones) - tens) % 1000;
console.log("hundreds: " + (hundreds / 100));
let thousands = (((num - ones) - tens) - hundreds)
console.log("thousands: " + (thousands / 1000));

//3.
// string, boolean, number, number, undefined, object

//4.
var foo;    // statement
foo = 5;    // expression
foo;        // expression

//5. 
//The concatentation operator coerces the number 10 into the string "5" 

//6.
console.log(Number('5') + 10);

//7.
console.log(`The value of 5 + 10 is " ${Number('5') + 10}.`);

//8.
//No. Returns undefined.

//9.
var names = [ 'Sammy', 'Franco', 'Chestnut', 'Sinclair' ];

//10. 
let names = { Sammy: 'dog', Franco: 'rabbit', Chestnut: 'dog', Sinclair: 'llama' };

//11.
//false

//12.
//3

//13.
//true


