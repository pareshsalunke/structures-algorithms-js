function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

/**
 * => Count of queue
 * Add value to collection
 * [0, 1, 2, 3]
 * [head, ..., ..., tail]
 * @param value
 */
Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count();
  }

  return 'Max _capacity already reached. Remove element before adding a new one.';
};

/**
 * => Oldest element added collection
 * Remove item so that it is no longer in collection
 */
Queue.prototype.dequeue = function() {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
};

/**
 * => Oldest element added collection
 * Similiar to dequeue, but do not remove element from collection
 */
Queue.prototype.peek = function() {
  return this._storage[this._head];
};

/**
 * => number of elements in queue
 */
Queue.prototype.count = function() {
  return this._tail - this._head;
};

/**
 * Check if a value is in the queue:
 * @param value
 */
Queue.prototype.contains = function(value) {
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return true;
  }

  return false;
};

/**
 * (first)c-d-e-f(last)
 * myQueue.until('e')
 * => 3
 * @param value
 */
Queue.prototype.until = function (value) {
  // { 2: c, 3: d, 4: e, 5: f }
  for (var i = this._head; i < this._tail; i++) {
    if (this._storage[i] === value) return i - this._head + 1;
  }
};


var myQueue = new Queue(5);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
// console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.dequeue(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('e'), 'should be false');
console.log(myQueue.enqueue('d'), 'should be 3');
console.log(myQueue.enqueue('e'), 'should be 4');
console.log(myQueue.enqueue('f'), 'should be 5');
console.log(myQueue.enqueue('g'), 'should be 5');
console.log(myQueue.until('e'), 'should be 3');
console.log(myQueue);


function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
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
};

/**
 * => most recent element added collection
 * Similiar to pop, but do not remove element from collection
 */
Stack.prototype.peek = function() {
  return this._storage[this._count - 1];
};

/**
 * => number of elements in stack
 * @returns {Number}
 */
Stack.prototype.count = function() {
  return this._count;
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
};

/**
 * Get the number of pops until you get to a certain value
 * stack values - (first)c-d-e-f-g-h(last)
 * myStack.until('f')
 * => 4
 * @param value
 */
Stack.prototype.until = function(value) {
  // (first) c -> d -> e -> f -> g -> h (last)
  for (var i = 0; i < this._count; i++) {
    if (this._storage[i] === value) return i + 1;
  }

  return null;
};

function Queue_TwoStacks() {
  this._stackIn = new Stack();// [1,2,3,4,5]
  this._stackOut = new Stack();// [5,4,3,2,1] => pop() => 1
}

Queue_TwoStacks.prototype.enqueue = function(val) {
  this._stackIn.push(val);
};

Queue_TwoStacks.prototype._transferStacks = function() {
  while (this._stackIn.count() > 0) {// [5,4,3,2,1]
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStacks.prototype.dequeue = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.pop();// [5,4,3,2,1]
};

Queue_TwoStacks.prototype.count = function() {
  return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStacks.prototype.peek = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.peek();
};


console.log('');
console.log('');
console.log('____________________________________________');
console.log('Implement a queue using two stacks.');

var myQueue_TwoStacks = new Queue(3);
console.log(myQueue_TwoStacks.enqueue('a'), 'should be 1');
console.log(myQueue_TwoStacks.enqueue('b'), 'should be 2');
console.log(myQueue_TwoStacks.enqueue('c'), 'should be 3');
console.log(myQueue_TwoStacks.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue_TwoStacks.dequeue(), 'should be a');
console.log(myQueue_TwoStacks.count(), 'should be 2');
console.log(myQueue_TwoStacks.peek(), 'should be b');
console.log(myQueue_TwoStacks.count(), 'should be 2');


