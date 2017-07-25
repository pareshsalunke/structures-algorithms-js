//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
// base =  4
// expo = 3
// => 4*4*4

function exponentWithForLoop(base, expo) {
  if (expo === 0) return 1;
  if (expo === 1) return base;

  var result = 1;
  for (var i = 0; i < expo; i++) {
    result *= base;
  }

  return result;
}

function exponentWithWhileLoop(base, expo) {
  if (expo === 0) return 1;
  if (expo === 1) return base;

  var result = 1;

  while (expo > 0) {
    result *= base;
    expo--;
  }

  return result;
}

console.time('exponentWithForLoop');
console.log(exponentWithForLoop(4, 3), 'should be 64');
console.timeEnd('exponentWithForLoop');
// => exponentWithForLoop: 0.80126953125ms

//////
console.log();
console.time('exponentWithWhileLoop');
console.log(exponentWithWhileLoop(4, 3), 'should be 64');
console.timeEnd('exponentWithWhileLoop');
// => exponentWithWhileLoop: 0.3349609375ms
