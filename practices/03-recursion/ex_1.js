//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
// n = 5
// => 5, 4, 3, 2, 1, 0

function countDown (n) {
  console.log(n);
  if (n > 0) countDown(n-1);
}

countDown(5);
