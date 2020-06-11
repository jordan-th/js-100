let f = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return f(n - 1) + f(n - 2);
}



console.log(f(7));
console.log(g(7)); 