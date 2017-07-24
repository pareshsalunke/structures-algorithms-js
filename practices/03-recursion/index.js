//- First example
var tracker = 0;
var callMe = function () {
  tracker++;
  if (tracker === 3) return 'loops!';

  return callMe('anytime');
};

console.log(callMe(), "should be 'loops!'");
console.log('');


//- Looping
var loopNTimes = function (n) {
  console.log('n equals', n);
  if (n <= 1) return 'complete';
  return loopNTimes(n - 1);
};

// n equals 3
// n equals 2
// n equals 1
loopNTimes(3);
console.log('');


//- Factorial with Loop
// 5! = 5*4*3*2*1
/* If we call computeFactorial(5), then the loop will run:

    results *= 2;
    results *= 3;
    results *= 4;
    results *= 5;

 */
function computeFactorial (num) {
  var result = 1;

  for (var i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(computeFactorial(5), 'should be 120');
console.log('');



//- Factorial with Recursive
// 5! = 5*4*3*2*1
/* If we call computeFactorialRecursive(5), then the recursion will run:

    5 * computeFactorial(4)
        4 * computeFactorial(3)
            3 * computeFactorial(2)
                2 * computeFactorial(1)
                    1
 */
function computeFactorialRecursive (num) {
  if (num === 1) {
    return 1;
  }

  return num * computeFactorialRecursive(num - 1);
}

console.log(computeFactorialRecursive(5), 'should be 120');
console.log(computeFactorialRecursive(6), 'should be 720');
console.log('');



//- Common Patterns for Recursion:
//+ Wrapper Functions
//+ Passing Memos/Accumulators

//-- Wrapper Function
function runRecursiveLoop(start, end) {
  function recurse(i) {
    console.log(i);
    if(i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

function runLoopAsMyself(i, end) {
  console.log(i);
  if(i < end) {
    runLoopAsMyself(i + 1, end);
  }
}

runRecursiveLoop(1, 5);
console.log('');
runLoopAsMyself(1, 5);
console.log('');



//-- Passing Memos/Accumulators
// ['a', 'b', 'c']
// ,
function joinElements(array, joinString) {
  // 0
  // ''
  function recurse(index, resultSoFar) { // {1}
    resultSoFar += array[index];//a

    if(index === array.length - 1) {// end
      return resultSoFar;
    } else {// 0 -> last
      return recurse(index + 1, resultSoFar + joinString);// {2} 1 | a,
    }
  }

  return recurse(0, '');
}

var elementsStr = joinElements(['a', 'b', 'c'], '-');
console.log(elementsStr, "should be 'a-b-c'");
console.log('');
