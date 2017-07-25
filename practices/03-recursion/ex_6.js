//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
// [1,2,3,4]
// => [4,3,2,1]

function recursiveReverse (arr) {
  var values = [];
  var addItems = function(arr) {
    if (arr.length > 0) {
      values.push(arr.pop());
      addItems(arr);
    }
    return false;
  };

  addItems(arr);
  return values;
}

console.time('recusiveReverse');
console.log(recursiveReverse([1,2,3,4]), 'should be [4,3,2,1]');
console.timeEnd('recusiveReverse');

