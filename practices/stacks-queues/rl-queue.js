// Replace my code with code in my class
// My code looks like shit
// Oh my god, why do not I learn it sooner?

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
  /*
  if (this.count() >= this._capacity) {
    var msgError = 'Max _capacity already reached. Remove element before adding a new one.';
    console.log(msgError);
    return msgError;
  }

  var key = Date.now() * Math.random();
  this._storage[key] = value;
  return Object.keys(this._storage).length;
  */
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

  /*
  var keys = Object.keys(this._storage);
  var firstKey = keys[0];
  var firstQueue = this._storage[firstKey];
  delete this._storage[firstKey];

  return firstQueue;
  */
};

/**
 * => Oldest element added collection
 * Similiar to dequeue, but do not remove element from collection
 */
Queue.prototype.peek = function() {
  return this._storage[this._head];

  /*var keys = Object.keys(this._storage);
  var firstKey = keys[0];
  return this._storage[firstKey];*/
};

/**
 * => number of elements in queue
 */
Queue.prototype.count = function() {
  return this._tail - this._head;

  /*
  return Object.keys(this._storage).length;
  */
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
  /*for (var key in this._storage) {
    var storeValue = this._storage[key];
    if (storeValue === value) {
      return true;
      break;
    }
  }

  return false;*/
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

  /*
  var total = this.count();// 6
  for (var key in this._storage) {
    var storeValue = this._storage[key];
    if (storeValue === value) {
      return total;
      break;
    }

    total--;
  }

  return -1;
  */
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


/*
myQueue.enqueue(9);
myQueue.enqueue(6);
myQueue.enqueue(3);
//myQueue.dequeue();
//myQueue.dequeue();
console.log(myQueue.enqueue(7));
console.log(myQueue.enqueue(5));
myQueue.enqueue(2);
//myQueue.dequeue();
//myQueue.dequeue();
//myQueue.dequeue();
//myQueue.dequeue();


console.log(Object.values(myQueue._storage));

console.log('=== peek');
console.log(myQueue.peek());

console.log('=== count');
console.log(myQueue._storage);

console.log('=== contains');
console.log(myQueue.contains(0));

console.log('=== until');
console.log(myQueue.until(6));
*/
