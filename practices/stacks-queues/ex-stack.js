function Stack(capacity) {
  this.capacity = capacity;
  this.storage = {};
}

/**
 * => count of stack
 * add value to collection
 * @param value
 */
Stack.prototype.push = function(value) {
  if (this.count() >= this.capacity) {
    return 'Max capacity already reached. Remove element before adding a new one.';
  }

  var key = Date.now() * Math.random();
  this.storage[key] = value;
  return Object.keys(this.storage).length;
};

/**
 * => most recent element added collection
 * Remove item so that it is no longer in collection
 */
Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var lastKey = keys[keys.length - 1];
  var lastItem = this.storage[lastKey];
  delete this.storage[lastKey];

  return lastItem;
};

/**
 * => most recent element added collection
 * Similiar to pop, but do not remove element from collection
 */
Stack.prototype.peek = function() {
  var keys = Object.keys(this.storage);
  var lastKey = keys[keys.length - 1];
  return this.storage[lastKey];
};

/**
 * => number of elements in stack
 * @returns {Number}
 */
Stack.prototype.count = function() {
  return Object.keys(this.storage).length;
};

/**
 * Check if a value is in the stack:
 * @param value
 */
Stack.prototype.contains = function(value) {
  for (var key in this.storage) {
    var storeValue = this.storage[key];
    if (storeValue === value) {
      return true;
      break;
    }
  }

  return false;
};

/**
 * Get the number of pops until you get to a certain value
 * stack values - (first)2-5-7-3-6-9(last)
 * myStack.until(7)
 * => 4
 * @param value
 */
Stack.prototype.until = function(value) {
  var index = 1;

  for (var key in this.storage) {
    var storeValue = this.storage[key];

    if (storeValue === value) {
      return index;
      break;
    }

    index++;
  }

  return -1;
};


var myStack = new Stack(10);
//console.log(myStack.push('makeEggs'));
//console.log(myStack.push('crackEggs'));
//console.log(myStack.push('getBowl'));

//console.log('pop', myStack.pop());
//console.log('peek', myStack.peek());
//myStack.push('fryEggs');

//console.log('=========== Contains === ');
//console.log(myStack.contains('fryEggs'));

console.log('=========== Until === ');
myStack.push(9);
myStack.push(6);
myStack.push(3);
myStack.push(7);
myStack.push(5);
myStack.push(2);
console.log(myStack.until(2));
