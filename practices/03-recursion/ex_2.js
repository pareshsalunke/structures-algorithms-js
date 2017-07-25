//2. Next, try looping just like above except using recursion
// n = 5
// => 5, 4, 3, 2, 1, 0

function countDown (n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

countDown(5);
