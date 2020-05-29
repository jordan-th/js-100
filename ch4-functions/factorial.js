function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let a = times(1, 1);
let b = times(a, 2);
let c = times(b, 3);
let d = times(c, 4);
times(d, 5);