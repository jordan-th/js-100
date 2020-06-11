/*1.
person['name'] //OR
person.name
*/

/*2.
They are all valid. Keys are coerced in to strings.
*/

/*3.
let myArray = {0: 'this', 1: 'is', 2:'objective', length: 3}
};
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
*/

/*4.
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let arr = Object.keys(obj)
console.log(arr.map(el => el.toUpperCase()))
*/

/*5
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);
*/

/*6
Different output. Snippit 2 will print prototype keys in
addition to the key I just created because for/in loops
iterate through prototype keys. Object.keys only attends
to keys that belong to the argument.
*/

/*7.
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};
console.log(copy(objToCopy));
function copy(orig, arr) {
  let tempObj = {}
  if (arr === undefined) {
    Object.assign(tempObj, orig);
  }
  else for (let prop in orig) {
    if (arr.includes(prop)) {
      tempObj[prop] = orig[prop]
    } 
  }
  return tempObj;
};
*/

/*8.
It logs 'hi' and 'hello'. We might expect qux to log 'hi' as
well but when we assigned 'hi' to argument2 in bar, we
never assigned that value back to qux. On the other hand,
argument1 and foo both refer to the same object, so changes
made to argument1 also affect foo.
*/
