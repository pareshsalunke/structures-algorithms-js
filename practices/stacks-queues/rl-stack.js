// Replace my code with code in my class
// My code looks like shit
// Oh my god, why do not I learn it sooner?

function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;

  /*
  this.capacity = capacity;
  this.storage = {};
   */
}

/**
 * => count of stack
 * add value to collection
 * 0(1)
 * @param value
 */
Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }

  return 'Max _capacity already reached. Remove element before adding a new one.';

  /*
  if (this.count() >= this._capacity) {
    return 'Max _capacity already reached. Remove element before adding a new one.';
  }

  var key = Date.now() * Math.random();
  this._storage[key] = value;
  return Object.keys(this._storage).length;
  */
};

/**
 * => most recent element added collection
 * Remove item so that it is no longer in collection
 * 2 items, {0: ..., 1: ...}
 */
Stack.prototype.pop = function() {
  if (this._count === 0) {
    return 'No element inside the stack. Add element before poping.';
  }

  var value = this._storage[--this._count];
  delete this._storage[this._count];
  return value;
  /*var keys = Object.keys(this._storage);
  var lastKey = keys[keys.length - 1];
  var lastItem = this._storage[lastKey];
  delete this._storage[lastKey];

  return lastItem;*/
};

/**
 * => most recent element added collection
 * Similiar to pop, but do not remove element from collection
 */
Stack.prototype.peek = function() {
  return this._storage[--this._count];

  /*
  var keys = Object.keys(this._storage);
  var lastKey = keys[keys.length - 1];
  return this._storage[lastKey];
  */
};

/**
 * => number of elements in stack
 * @returns {Number}
 */
Stack.prototype.count = function() {
  return this._count;

  /*
  return Object.keys(this._storage).length;
  */
};

/**
 * Check if a value is in the stack:
 * @param value
 */
Stack.prototype.contains = function(value) {
  for (var i = 0; i < this._count; i++) {
    if (value === this._storage[i]) return true;
  }

  return false;

  /*
  for (var key in this._storage) {
    var storeValue = this._storage[key];
    if (storeValue === value) {
      return true;
      break;
    }
  }

  return false;
  */
};

/**
 * Get the number of pops until you get to a certain value
 * stack values - (first)h-g-f-e-d-c(last)
 * myStack.until('f')
 * => 4
 * @param value
 */
Stack.prototype.until = function(value) {
  // (last) c -> d -> e -> f -> g -> h (first)
  for (var i = 0; i < this._count; i++) {
    console.log('-- ', this._storage[i]);
    if (this._storage[i] === value) {
      return i + 1;
    }
  }

  return null;

  /*
  var index = 1;

  for (var key in this._storage) {
    var storeValue = this._storage[key];

    if (storeValue === value) {
      return index;
      break;
    }

    index++;
  }

  return -1;
  */
};


var myStack = new Stack(10);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.pop(), 'should be b');
console.log(myStack.pop(), 'should be a');
console.log(myStack.pop(), '> should be No element...');
console.log(myStack.push('c'), 'should be 1');
console.log(myStack.contains('d'), 'should be false');
console.log(myStack.push('d'), 'should be 2');
console.log(myStack.push('e'), 'should be 3');
console.log(myStack.push('f'), 'should be 4');
console.log(myStack.push('g'), 'should be 5');
console.log(myStack.push('h'), 'should be 6');
console.log(myStack.until('f'), 'should be 4');
console.log(myStack);

//console.log(myStack.push('makeEggs'));
//console.log(myStack.push('crackEggs'));
//console.log(myStack.push('getBowl'));

//console.log('pop', myStack.pop());
//console.log('peek', myStack.peek());
//myStack.push('fryEggs');

//console.log('=========== Contains === ');
//console.log(myStack.contains('fryEggs'));

//console.log('=========== Until === ');
//myStack.push(9);
//myStack.push(6);
//myStack.push(3);
//myStack.push(7);
//myStack.push(5);
//myStack.push(2);
//console.log(myStack.until(2));
