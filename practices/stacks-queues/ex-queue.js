function Queue(capacity) {
  this.capacity = capacity;
  this.storage = {};
}

/**
 * => Count of queue
 * Add value to collection
 * @param value
 */
Queue.prototype.enqueue = function(value) {
  if (this.count() >= this.capacity) {
    var msgError = 'Max capacity already reached. Remove element before adding a new one.';
    console.log(msgError);
    return msgError;
  }

  var key = Date.now() * Math.random();
  this.storage[key] = value;
  return Object.keys(this.storage).length;
};

/**
 * => Oldest element added collection
 * Remove item so that it is no longer in collection
 */
Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  var firstKey = keys[0];
  var firstQueue = this.storage[firstKey];
  delete this.storage[firstKey];

  return firstQueue;
};

/**
 * => Oldest element added collection
 * Similiar to dequeue, but do not remove element from collection
 */
Queue.prototype.peek = function() {
  var keys = Object.keys(this.storage);
  var firstKey = keys[0];
  return this.storage[firstKey];
};

/**
 * => number of elements in queue
 */
Queue.prototype.count = function() {
  return Object.keys(this.storage).length;
};

/**
 * Check if a value is in the queue:
 * @param value
 */
Queue.prototype.contains = function(value) {
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
 * (first)2-5-7-3-6-9(last)
 * myQueue.until(7)
 * => 3
 * @param value
 */
Queue.prototype.until = function (value) {
  debugger;
  var total = this.count();// 6
  for (var key in this.storage) {
    var storeValue = this.storage[key];
    if (storeValue === value) {
      return total;
      break;
    }

    total--;
  }

  return -1;
};


var myQueue = new Queue(6);
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


console.log(Object.values(myQueue.storage));

console.log('=== peek');
console.log(myQueue.peek());

console.log('=== count');
console.log(myQueue.storage);

console.log('=== contains');
console.log(myQueue.contains(0));

console.log('=== until');
console.log(myQueue.until(6));
