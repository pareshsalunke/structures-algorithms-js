//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
// base =  4
// expo = 3
// => 4*4*4

/**
 * @return {number}
 */
function RecursiveExponent(base, expo) {
  if (expo === 0) return 1;
  if (expo === 1) return base;

  return base * RecursiveExponent(base, expo - 1);
}

console.log(RecursiveExponent(4, 3), 'should be 64'); // {1} => 64

