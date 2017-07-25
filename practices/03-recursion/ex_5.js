//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num',
// and multiplies each arr value into by num and returns an array of the values.

// [2,4,6,8] 3
// => [6,12,18,24]

function recursiveMultiplier (arr, num) {
  var values = [];
  var addItems = function(arr, num){
    values.push(arr.shift() * num);
    if (arr.length > 0) addItems(arr, num);
    else return false;
  };

  addItems(arr, num);
  return values;
}

console.time('recursiveMultiplier');
console.log(recursiveMultiplier([2,4,6,8], 3), 'should be [6, 12, 18, 24]');
console.timeEnd('recursiveMultiplier');
